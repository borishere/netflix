import { ErrorMessage } from "formik"
import { FC } from "react";
import { classNames } from "../../../../common/utils";

interface Props {
  name: string;
  title: string;
  errorAriaLabel: string;
  isLong?: boolean;
}

export const ItemWrap: FC<Props> = ({ name, title, errorAriaLabel, isLong = false, children }) => {
  const classes = classNames({
    'modal-form__item': true,
    long: isLong
  })

  return (
    <div className={classes}>
      <label>{title}</label>

      {children}

      <ErrorMessage name={name} component='div' aria-label={errorAriaLabel} />
    </div>
  )
}
