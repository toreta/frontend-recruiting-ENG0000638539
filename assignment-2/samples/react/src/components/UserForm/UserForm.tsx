import { useUserForm } from "./useUserForm";
import {
  ERROR_MESSAGE,
  TEXT,
  PLACEHOLDER,
  PREFECTURES,
} from "./UserForm.const";
import { Button } from "../Button";
import { FormLabel } from "../forms/FormLabel";
import { InputText } from "../forms/InputText";
import { InputSelect } from "../forms/InputSelect";
import style from "./UserForm.module.css";

export function UserForm() {
  const {
    name,
    handleChangeName,
    email,
    handleChangeEmail,
    isErrorEmail,
    zip,
    handleChangeZip,
    isErrorZip,
    prefecture,
    handleChangePrefecture,
    address1,
    handleChangeAddress1,
    address2,
    handleChangeAddress2,
    isError,
    handleClickSubmit,
  } = useUserForm();

  return (
    <div className={style.userForm}>
      <div className={style.formGroup}>
        <div className={style.formLabel}>
          <FormLabel>{TEXT.NAME}</FormLabel>
        </div>
        <div className={style.formInput}>
          <InputText
            value={name}
            placeholder={PLACEHOLDER.NAME}
            onChange={handleChangeName}
          />
        </div>
      </div>
      <div className={style.formGroup}>
        <div className={style.formLabel}>
          <FormLabel>{TEXT.EMAIL}</FormLabel>
        </div>
        <div className={style.formInput}>
          <InputText
            value={email}
            placeholder={PLACEHOLDER.EMAIL}
            isError={isErrorEmail}
            errorMessage={ERROR_MESSAGE.EMAIL}
            onChange={handleChangeEmail}
          />
        </div>
      </div>
      <div className={style.formGroup}>
        <div className={style.formLabel}>
          <FormLabel>{TEXT.ZIP}</FormLabel>
        </div>
        <div className={style.formInput}>
          <InputText
            value={zip}
            placeholder={PLACEHOLDER.ZIP}
            isError={isErrorZip}
            isZip
            errorMessage={ERROR_MESSAGE.ZIP}
            onChange={handleChangeZip}
          />
        </div>
      </div>
      <div className={style.formGroup}>
        <div className={style.formLabel}>
          <FormLabel>{TEXT.PREFECTURES}</FormLabel>
        </div>
        <div className={style.formInput}>
          <InputSelect
            value={prefecture}
            options={PREFECTURES}
            placeholder={PLACEHOLDER.PREFECTURES}
            onChange={handleChangePrefecture}
          />
        </div>
      </div>
      <div className={style.formGroup}>
        <div className={style.formLabel}>
          <FormLabel>{TEXT.ADDRESS1}</FormLabel>
        </div>
        <div className={style.formInput}>
          <InputText
            value={address1}
            placeholder={PLACEHOLDER.ADDRESS1}
            onChange={handleChangeAddress1}
          />
        </div>
      </div>
      <div className={style.formGroup}>
        <div className={style.formLabel}>
          <FormLabel>{TEXT.ADDRESS2}</FormLabel>
        </div>
        <div className={style.formInput}>
          <InputText
            value={address2}
            placeholder={PLACEHOLDER.ADDRESS2}
            onChange={handleChangeAddress2}
          />
        </div>
      </div>
      <div className={style.button}>
        <Button isError={isError} onClick={handleClickSubmit}>
          {TEXT.BUTTON}
        </Button>
      </div>
    </div>
  );
}
