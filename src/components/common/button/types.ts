type DefaultButtonPropsType = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export type ButtonPropsType = DefaultButtonPropsType & {
  variant?: 'contained' | 'outlined'
  size?: 'small' | 'large'
}
