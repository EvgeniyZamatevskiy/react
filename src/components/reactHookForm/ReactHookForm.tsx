import React, { FC, useEffect } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { ReturnComponentType } from 'types'
import { DataType, ReactHookFormPropsType } from './types'
import style from './ReactHookForm.module.scss'

export const ReactHookForm: FC<ReactHookFormPropsType> = (): ReturnComponentType => {

	const {
		handleSubmit,
		register,

		watch,
		reset,
		resetField,
		setFocus,
		setError,
		setValue,
		getFieldState,
		getValues,
		clearErrors,
		control,
		formState: { errors, isValid } }
		= useForm<DataType>(
			{
				mode: 'onChange',
				defaultValues: { email: 'defaultEmail@gmail.com', password: 'defaultPassword', confirmPassword: 'defaultPassword', rememberMe: false },
				delayError: 0, // задержка ошибки в мили-секундах
			},
		)

	const emailSettings = {
		required: 'Field is required!',
		pattern: {
			value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
			message: 'Incorrect email!',
		}
	}

	const passwordSettings = {
		required: 'Field is required!',
		minLength: { value: 8, message: 'Min 8 characters!' },
		maxLength: { value: 20, message: 'Max 20 characters!' },
	}

	const confirmPasswordSettings = {
		required: 'Field is required!',
		minLength: { value: 8, message: 'Min 8 characters!' },
		maxLength: { value: 20, message: 'Max 20 characters!' },
		validate: (value: string) => {
			if (watch('password') !== value) {
				return 'Your passwords do no match!'
			}
		}
	}

	const errorEmail = getFieldState('email').error
	const isDirtyEmail = getFieldState('email').isDirty
	const isTouchedEmail = getFieldState('email').isTouched
	const invalidEmail = getFieldState('email').invalid

	const allValues = getValues()

	const onSubmit: SubmitHandler<DataType> = (data): void => {
		console.log(data)
		// reset()
		// resetField('email')
	}

	useEffect(() => {
		setFocus('email')
	}, [])

	return (
		<>
			<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
				<input type='email' placeholder='Email'
					{...register('email', emailSettings)} />
				{errors?.email && <p>{errors?.email.message}</p>}

				<input type={'password'} placeholder='Password'
					{...register('password', passwordSettings)} />
				{errors?.password && <p>{errors?.password.message}</p>}
				<input type='password' placeholder='Confirm password'
					{...register('confirmPassword', confirmPasswordSettings)} />
				{errors?.confirmPassword && <p>{errors?.confirmPassword.message}</p>}

				<select {...register('category', { required: true })}>
					<option value='1'>Select 1</option>
					<option value='2'>Select 2</option>
					<option value='3'>Select 3</option>
				</select>

				<input {...register('developer', { required: true })} type='radio' value='Yes' />
				<input {...register('developer', { required: true })} type='radio' value='No' />

				<label>
					<input type='checkbox'
						{...register('rememberMe')} />
					Remember me
				</label>
				<button type='submit' disabled={!isValid}>Sign in</button>

				{/* При использовании в material-ui и его аналогов */}
				{/* <Controller
				name='email'
				control={control}
				render={({ field }) => <Input {...field} />}
			/>
			<Controller
				name='iceCreamType'
				control={control}
				render={({ field }) => <Select {...field}
					options={[
						{ value: 'chocolate', label: 'Chocolate' },
						{ value: 'strawberry', label: 'Strawberry' },
						{ value: 'vanilla', label: 'Vanilla' }
					]}
				/>}
			/>
			<Controller
				name='MyCheckbox'
				control={control}
				defaultValue={false}
				rules={{ required: true }}
				render={({ field }) => <Checkbox {...field} />}
			/> */}
			</form>
			<button onClick={() => setValue('email', 'hardcodeEmail@gmail.com')}>Отправить значение конкретному элементу</button>
			<button onClick={() => clearErrors()}>Очистить все, либо конкретную ошибку</button>
			<button onClick={() => setError('email', { message: 'some error' })}>Отправить ошибку конкретному элементу</button>
		</>
	)
}
