import React, { FC, ReactElement } from 'react'
import { useFormik } from 'formik'
import { EMPTY_STRING } from 'constants/base'
import { FormikErrorType } from './types'
import style from './Formik.module.scss'

export const Formik: FC = (): ReactElement => {

	const formik = useFormik({
		initialValues: { email: EMPTY_STRING, password: EMPTY_STRING, rememberMe: false },
		validate: values => {
			const errors: FormikErrorType = {}

			if (!values.email) {
				errors.email = 'Email is required!'
			}

			if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
				errors.email = 'Invalid email address'
			}

			if (!values.password) {
				errors.password = 'Password is required!'
			}

			if (values.password.length < 3) {
				errors.password = 'Password must be more than 3 characters!'
			}

			return errors
		},
		onSubmit: values => {
			console.log(values)
		},
	})

	return (
		<>
			<form className={style.form} onSubmit={formik.handleSubmit}>
				<input type='email' placeholder='Email'
					{...formik.getFieldProps('email')} />
				{formik.touched.email && formik.errors.email && <p>{formik.errors.email}</p>}

				<input type={'password'} placeholder='Password'
					{...formik.getFieldProps('password')} />
				{formik.touched.password && formik.errors.password && <p>{formik.errors.password}</p>}

				<label>
					<input type='checkbox'
						{...formik.getFieldProps('rememberMe')} />
					Remember me
				</label>
				<button type='submit'>Login</button>
			</form>
		</>
	)
}
