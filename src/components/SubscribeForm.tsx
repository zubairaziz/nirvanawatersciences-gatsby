import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Formik, Form, Field, FormikProps } from 'formik'
import * as Yup from 'yup'
import { ModalContext } from './Layout'
import { axiosPost } from '../utils/utils'

interface FormProps {
  subscribe_email: string
}

interface FormStatus {
  message: string
  type: string
}

interface FormStatusProps {
  [key: string]: FormStatus
}

const formStatusProps: FormStatusProps = {
  success: {
    message: 'Thank you for subscribing to Nirvana Water Sciences',
    type: 'success',
  },
  error: {
    message: 'You are already subscribed to Nirvana Water Sciences.',
    type: 'error',
  },
}

const SubscribeForm: React.FunctionComponent = () => {
  const WEBSITE_URL = process.env.GATSBY_WORDPRESS_URL
  const ENDPOINT = process.env.GATSBY_NEWSLETTER_API
  const USERNAME = process.env.GATSBY_WORDPRESS_USERNAME
  const PASSWORD = process.env.GATSBY_WORDPRESS_PASSWORD

  const [token, setToken] = useState('')
  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>({
    message: '',
    type: '',
  })
  const [modalIsOpen, setModalIsOpen] = useContext(ModalContext)

  const handleButtonPress = () => {
    setModalIsOpen(() => (modalIsOpen ? false : true))
  }

  useEffect(() => {
    axios({
      method: 'post',
      url: `${WEBSITE_URL}/wp-json/jwt-auth/v1/token`,
      data: {
        username: USERNAME, // provide a user credential with subscriber role
        password: PASSWORD,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        setToken(response.data.token)
      })
      .catch((error) => {
        throw error
      })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setDisplayFormStatus(false)
    }, 3000)
  }, [displayFormStatus, formStatus])

  const submitSubscribeForm = async (data: FormProps, resetForm: any) => {
    try {
      const formData = {
        email: data.subscribe_email,
        status: 'confirmed',
      }
      const res = await axios({
        method: 'post',
        url: `${WEBSITE_URL}${ENDPOINT}subscribers`,
        data: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      if (res) {
        resetForm({})
        setFormStatus(formStatusProps.success)
      }
    } catch (error) {
      setFormStatus(formStatusProps.error)
    } finally {
      setDisplayFormStatus(true)
    }
  }

  return (
    <div>
      <Formik
        initialValues={{
          subscribe_email: '',
        }}
        onSubmit={(values: FormProps, actions) => {
          submitSubscribeForm(values, actions.resetForm)
          setTimeout(() => {
            actions.setSubmitting(false)
            setDisplayFormStatus(false)
          }, 500)
        }}
        validationSchema={Yup.object().shape({
          subscribe_email: Yup.string().email().required('Enter valid email address'),
        })}
      >
        {(props: FormikProps<FormProps>) => {
          const { touched, errors, values, isSubmitting } = props
          return (
            <>
              <div className="relative py-4 mb-4 md:py-8 md:mb-8 md:hidden">
                <button onClick={handleButtonPress} className="button button-hollow">
                  subscribe
                </button>
              </div>
              <div className="relative hidden py-4 mb-4 md:py-8 md:mb-8 md:block">
                <Form className="relative flex items-center justify-center w-full gap-x-4" noValidate>
                  <label htmlFor="subscribe_email">email address</label>
                  <Field
                    className="py-0 border-0 border-b border-dark-gray md:w-96 lg:w-120 focus:ring-0"
                    id="subscribe_email"
                    name="subscribe_email"
                    type="email"
                    required
                  />
                  <button type="submit" className="button button-hollow" disabled={isSubmitting}>
                    subscribe
                  </button>
                </Form>
              </div>
              {displayFormStatus ? (
                <div className="formStatus">
                  <p className={formStatus.type}>{formStatus.message}</p>
                </div>
              ) : null}
            </>
          )
        }}
      </Formik>
    </div>
  )
}

export default SubscribeForm
