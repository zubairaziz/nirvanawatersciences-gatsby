import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Select from 'react-select'
import { Formik, Form, Field, FormikProps } from 'formik'
import * as Yup from 'yup'
import { states, reasons } from '../data/formData'

interface FormProps {
  firstName: string
  lastName: string
  email: string
  phone: string
  city: string
  state: any
  zip: string
  reason: any
  distributor: any
  message: string
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
    message: 'Thank you for contacting Nirvana Water Sciences',
    type: 'success',
  },
  error: {
    message: 'Something went wrong. Please try again.',
    type: 'error',
  },
}

const ContactForm: React.FunctionComponent = () => {
  const WEBSITE_URL = process.env.GATSBY_WORDPRESS_URL
  const USERNAME = 'admin'
  const PASSWORD = 'password'
  const FORM_ID = '89'

  const [token, setToken] = useState('')
  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>({
    message: '',
    type: '',
  })

  const dropDownStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? 'white' : '#4D4D4D',
      borderBottom: '1px solid #E5E7EB',
    }),
    control: () => ({
      display: 'flex',
      width: '100%',
      border: 'none',
      color: '#4D4D4D',
      borderBottom: '1px solid #4D4D4D',
    }),
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

  const submitContactForm = async (data: FormProps, resetForm: any) => {
    try {
      const bodyFormData = new FormData()
      bodyFormData.set('first-name', data.firstName)
      bodyFormData.set('last-name', data.lastName)
      bodyFormData.set('email', data.email)
      bodyFormData.set('phone', data.phone)
      bodyFormData.set('city', data.city)
      bodyFormData.set('state', data.state.value)
      bodyFormData.set('zip', data.zip)
      bodyFormData.set('reason', data.reason.value)
      bodyFormData.set('distributor', data.distributor.toString())
      bodyFormData.set('message', data.message)
      const res = await axios({
        method: 'post',
        url: `${WEBSITE_URL}/wp-json/contact-form-7/v1/contact-forms/${FORM_ID}/feedback`,
        data: bodyFormData,
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
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
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          city: '',
          state: '',
          zip: '',
          reason: '',
          distributor: false,
          message: '',
        }}
        onSubmit={(values: FormProps, actions) => {
          submitContactForm(values, actions.resetForm)
          setTimeout(() => {
            actions.setSubmitting(false)
          }, 500)
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required('Please enter first name'),
          lastName: Yup.string().required('Please enter last name'),
          email: Yup.string().email().required('Enter valid email address'),
        })}
      >
        {(props: FormikProps<FormProps>) => {
          const { touched, errors, values, isSubmitting, setFieldValue, setFieldTouched } = props
          return (
            <div>
              <p className="pb-4 md:pl-2">(*) indicates required fields</p>
              <Form className="relative" noValidate>
                <div className="relative py-4 mb-4 md:py-8 md:mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div
                      className="w-full py-2 md:p-2"
                      data-sal="slide-up"
                      data-sal-duration="500"
                      data-sal-easing="easeInOutBack"
                    >
                      <label htmlFor="firstName" className="sr-only">
                        first name
                      </label>
                      <Field
                        className="w-full border-0 border-b rounded-0 focus:ring-0"
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="first name*"
                        required
                      />
                    </div>
                    <div
                      className="w-full py-2 md:p-2"
                      data-sal="slide-up"
                      data-sal-duration="500"
                      data-sal-easing="easeInOutBack"
                    >
                      <label className="sr-only" htmlFor="lastName">
                        last name
                      </label>
                      <Field
                        className="w-full border-0 border-b rounded-0 focus:ring-0"
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="last name*"
                        required
                      />
                    </div>
                    <div
                      className="w-full py-2 md:p-2"
                      data-sal="slide-up"
                      data-sal-duration="500"
                      data-sal-easing="easeInOutBack"
                    >
                      <label className="sr-only" htmlFor="email">
                        email address
                      </label>
                      <Field
                        className="w-full border-0 border-b rounded-0 focus:ring-0"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email*"
                        required
                      />
                    </div>
                    <div
                      className="w-full py-2 md:p-2"
                      data-sal="slide-up"
                      data-sal-duration="500"
                      data-sal-easing="easeInOutBack"
                    >
                      <label className="sr-only" htmlFor="phone">
                        phone
                      </label>
                      <Field
                        className="w-full border-0 border-b rounded-0 focus:ring-0"
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="phone"
                      />
                    </div>
                    <div
                      className="w-full py-2 md:p-2"
                      data-sal="slide-up"
                      data-sal-duration="500"
                      data-sal-easing="easeInOutBack"
                    >
                      <label className="sr-only" htmlFor="city">
                        city
                      </label>
                      <Field
                        className="w-full border-0 border-b rounded-0 focus:ring-0"
                        type="text"
                        id="city"
                        name="city"
                        placeholder="city"
                      />
                    </div>
                    <div className="grid w-full grid-cols-1 md:grid-cols-2">
                      <div
                        className="w-full py-2 md:p-2"
                        data-sal="slide-up"
                        data-sal-duration="500"
                        data-sal-easing="easeInOutBack"
                      >
                        <label className="sr-only md:hidden" htmlFor="mobile_state">
                          state
                        </label>
                        <Field
                          className="w-full border-0 border-b rounded-0 focus:ring-0 md:hidden"
                          id="mobile_state"
                          name="state"
                          as="select"
                        >
                          <option value="" disabled defaultValue="true">
                            state
                          </option>
                          {states.map((state) => (
                            <option key={state.value} value={state.value}>
                              {state.label}
                            </option>
                          ))}
                        </Field>
                        <label className="hidden sr-only md:block" htmlFor="state">
                          state
                        </label>
                        <Select
                          className="hidden md:block"
                          onChange={(value) => setFieldValue('state', value)}
                          onBlur={() => setFieldTouched('state', true)}
                          value={values.state}
                          inputId="state"
                          name="state"
                          placeholder="state"
                          options={states}
                          theme={(theme) => ({
                            ...theme,
                            borderRadius: 0,
                            colors: {
                              ...theme.colors,
                              primary25: '#F3F4F6',
                              primary: '#2F3392',
                            },
                          })}
                          styles={dropDownStyles}
                        />
                      </div>
                      <div
                        className="w-full py-2 md:p-2"
                        data-sal="slide-up"
                        data-sal-duration="500"
                        data-sal-easing="easeInOutBack"
                      >
                        <label className="sr-only" htmlFor="zip">
                          zip
                        </label>
                        <Field
                          className="w-full border-0 border-b rounded-0 focus:ring-0"
                          id="zip"
                          name="zip"
                          type="text"
                          placeholder="zip"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    className="w-full py-2 md:p-2"
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-easing="easeInOutBack"
                  >
                    <label className="sr-only md:hidden" htmlFor="mobile_reason">
                      reason
                    </label>
                    <Field
                      className="w-full border-0 border-b rounded-0 focus:ring-0 md:hidden"
                      id="mobile_reason"
                      name="reason"
                      as="select"
                    >
                      <option value="" disabled defaultValue="true">
                        how can we help you?
                      </option>
                      {reasons.map((reason) => (
                        <option key={reason.value} value={reason.value}>
                          {reason.label}
                        </option>
                      ))}
                    </Field>
                    <label className="hidden sr-only md:block" htmlFor="reason">
                      reason
                    </label>
                    <Select
                      className="hidden md:block"
                      onChange={(value) => setFieldValue('reason', value)}
                      onBlur={() => setFieldTouched('reason', true)}
                      value={values.reason}
                      inputId="reason"
                      name="reason"
                      placeholder="how can we help you?"
                      options={reasons}
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: 0,
                        colors: {
                          ...theme.colors,
                          primary25: '#F3F4F6',
                          primary: '#2F3392',
                        },
                      })}
                      styles={dropDownStyles}
                    />
                  </div>
                  <div
                    className="w-full py-2 md:p-2"
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-easing="easeInOutBack"
                  >
                    <label htmlFor="distributor">
                      <Field type="checkbox" name="distributor" id="distributor" />
                      <span className="ml-3">i would like to become a distributor</span>
                    </label>
                  </div>
                  <div
                    className="w-full py-2 md:p-2"
                    data-sal="slide-up"
                    data-sal-duration="500"
                    data-sal-easing="easeInOutBack"
                  >
                    <label className="sr-only" htmlFor="message">
                      message
                    </label>
                    <Field
                      className="w-full border-0 border-b rounded-0 focus:ring-0"
                      id="message"
                      name="message"
                      placeholder="message"
                      rows={5}
                      as="textarea"
                    />
                  </div>
                  <div className="md:pl-2 md:pt-2">
                    <button
                      type="submit"
                      className="button button-hollow"
                      disabled={isSubmitting}
                      data-sal="slide-up"
                      data-sal-delay="300"
                      data-sal-duration="500"
                      data-sal-easing="easeInOutBack"
                    >
                      submit
                    </button>
                  </div>
                </div>
              </Form>
              {displayFormStatus ? (
                <div className="formStatus">
                  <p className={formStatus.type}>{formStatus.message}</p>
                </div>
              ) : null}
            </div>
          )
        }}
      </Formik>
    </div>
  )
}

export default ContactForm
