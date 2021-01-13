import React, { useState } from 'react'
import { Grid, TextField, Button, makeStyles, createStyles, Theme } from '@material-ui/core'
import { Formik, Form, FormikProps } from 'formik'
import * as Yup from 'yup'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '450px',
      display: 'block',
      margin: '0 auto',
    },
    textField: {
      '& > *': {
        width: '100%',
      },
    },
    submitButton: {
      marginTop: '24px',
    },
    title: { textAlign: 'center' },
    successMessage: { color: 'green' },
    errorMessage: { color: 'red' },
  })
)

interface FormProps {
  fullName: string
  password: string
  confirmPassword: string
  email: string
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
    message: 'Signed up successfully.',
    type: 'success',
  },
  duplicate: {
    message: 'Email-id already exist. Please use different email-id.',
    type: 'error',
  },
  error: {
    message: 'Something went wrong. Please try again.',
    type: 'error',
  },
}

const SignUp: React.FunctionComponent = () => {
  const classes = useStyles()
  const [displayFormStatus, setDisplayFormStatus] = useState(false)
  const [formStatus, setFormStatus] = useState<FormStatus>({
    message: '',
    type: '',
  })

  const createNewUser = async (data: FormProps, resetForm: Function) => {
    try {
      // API call integration will be here. Handle success / error response accordingly.
      if (data) {
        setFormStatus(formStatusProps.success)
        resetForm({})
      }
    } catch (error) {
      const response = error.response
      if (response.data === 'user already exist' && response.status === 400) {
        setFormStatus(formStatusProps.duplicate)
      } else {
        setFormStatus(formStatusProps.error)
      }
    } finally {
      setDisplayFormStatus(true)
    }
  }

  return (
    <div className={classes.root}>
      <Formik
        initialValues={{
          fullName: '',
          password: '',
          confirmPassword: '',
          email: '',
        }}
        onSubmit={(values: FormProps, actions) => {
          createNewUser(values, actions.resetForm)
          setTimeout(() => {
            actions.setSubmitting(false)
          }, 500)
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required('Enter valid email-id'),
          fullName: Yup.string().required('Please enter full name'),
          password: Yup.string()
            .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/)
            .required('Please valid password. One uppercase, one lowercase, one special character and no spaces'),
          confirmPassword: Yup.string()
            .required('Required')
            .test('password-match', 'Password musth match', function (value) {
              return this.parent.password === value
            }),
        })}
      >
        {(props: FormikProps<FormProps>) => {
          const { values, touched, errors, handleBlur, handleChange, isSubmitting } = props
          return (
            <Form>
              <h1 className={classes.title}>Sign up</h1>
              <Grid container justify="space-around" direction="row">
                <Grid item lg={10} md={10} sm={10} xs={10} className={classes.textField}>
                  <TextField
                    name="fullName"
                    id="fullName"
                    label="Full Name"
                    value={values.fullName}
                    type="text"
                    helperText={errors.fullName && touched.fullName ? errors.fullName : 'Enter your full name.'}
                    error={errors.fullName && touched.fullName ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10} className={classes.textField}>
                  <TextField
                    name="password"
                    id="password"
                    label="Password"
                    value={values.password}
                    type="password"
                    helperText={
                      errors.password && touched.password
                        ? 'Please valid password. One uppercase, one lowercase, one special character and no spaces'
                        : 'One uppercase, one lowercase, one special character and no spaces'
                    }
                    error={errors.password && touched.password ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10} className={classes.textField}>
                  <TextField
                    name="confirmPassword"
                    id="confirmPassword"
                    label="Confirm password"
                    value={values.confirmPassword}
                    type="password"
                    helperText={
                      errors.confirmPassword && touched.confirmPassword
                        ? errors.confirmPassword
                        : 'Re-enter password to confirm'
                    }
                    error={errors.confirmPassword && touched.confirmPassword ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10} className={classes.textField}>
                  <TextField
                    name="email"
                    id="email"
                    label="Email-id"
                    value={values.email}
                    type="email"
                    helperText={errors.email && touched.email ? errors.email : 'Enter email-id'}
                    error={errors.email && touched.email ? true : false}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid item lg={10} md={10} sm={10} xs={10} className={classes.submitButton}>
                  <Button type="submit" variant="contained" color="secondary" disabled={isSubmitting}>
                    Submit
                  </Button>
                  {displayFormStatus && (
                    <div className="formStatus">
                      {formStatus.type === 'error' ? (
                        <p className={classes.errorMessage}>{formStatus.message}</p>
                      ) : formStatus.type === 'success' ? (
                        <p className={classes.successMessage}>{formStatus.message}</p>
                      ) : null}
                    </div>
                  )}
                </Grid>
              </Grid>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default SignUp

{
  /* <div className="relative py-4 mb-4 md:py-8 md:mb-8">
        <p className="pb-4 md:pl-2">(*) indicates required fields</p>
        <form onSubmit={handleSubmit} className="relative" noValidate>
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
              <input
                className="w-full border-0 border-b rounded-0 focus:ring-0"
                id="firstName"
                name="firstName"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
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
              <input
                className="w-full border-0 border-b rounded-0 focus:ring-0"
                id="lastName"
                name="lastName"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
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
              <input
                className="w-full border-0 border-b rounded-0 focus:ring-0"
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="email address*"
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
              <input
                className="w-full border-0 border-b rounded-0 focus:ring-0"
                id="phone"
                name="phone"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
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
              <input
                className="w-full border-0 border-b rounded-0 focus:ring-0"
                id="city"
                name="city"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
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
                <select
                  className="w-full border-0 border-b rounded-0 focus:ring-0 md:hidden"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.state}
                  id="mobile_state"
                  name="mobile_state"
                >
                  <option value="" disabled defaultValue={true}>
                    state
                  </option>
                  {states.map((state) => (
                    <option key={state.value} value={state.value}>
                      {state.label}
                    </option>
                  ))}
                </select>
                <label className="hidden sr-only md:block" htmlFor="state">
                  state
                </label>
                <Select
                  className="hidden md:block"
                  onChange={(value) => setFieldValue('state', value)}
                  onBlur={() => setFieldTouched('state', true)}
                  value={values.state}
                  placeholder="state"
                  inputId="state"
                  name="state"
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
                <input
                  className="w-full border-0 border-b rounded-0 focus:ring-0"
                  id="zip"
                  name="zip"
                  type="text"
                  onChange={handleChange}
                  value={values.zip}
                  placeholder="zip"
                />
              </div>
            </div>
          </div>
          <div className="w-full py-2 md:p-2" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeInOutBack">
            <label className="sr-only md:hidden" htmlFor="mobile_reason">
              reason
            </label>
            <select
              className="w-full border-0 border-b rounded-0 focus:ring-0 md:hidden"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.reason}
              id="mobile_reason"
              name="mobile_reason"
            >
              <option value="" disabled defaultValue={true}>
                how can we help you?
              </option>
              {reasons.map((reason) => (
                <option key={reason.value} value={reason.value}>
                  {reason.label}
                </option>
              ))}
            </select>
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
          <div className="w-full py-2 md:p-2" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeInOutBack">
            <label htmlFor="distributor">
              <input
                type="checkbox"
                name="distributor"
                id="distributor"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.distributor}
              />
              <span className="ml-3">i would like to become a distributor</span>
            </label>
            <p></p>
          </div>
          <div className="w-full py-2 md:p-2" data-sal="slide-up" data-sal-duration="500" data-sal-easing="easeInOutBack">
            <label className="sr-only" htmlFor="message">
              message
            </label>
            <textarea
              className="w-full border-0 border-b rounded-0 focus:ring-0"
              id="message"
              name="message"
              type="text"
              onChange={handleChange}
              value={values.message}
              placeholder="message"
              rows={5}
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
            </div> */
}
