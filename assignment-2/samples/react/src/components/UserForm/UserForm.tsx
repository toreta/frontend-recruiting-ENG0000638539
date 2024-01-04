import { useUserForm } from "./useUserForm";
import { PREFECTURES } from "./UserForm.const";
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
    zipCode,
    handleChangeZipCode,
    isErrorZipCode,
    prefectures,
    handleChangePrefectures,
    streetAddress,
    handleChangeStreetAddress,
    buildingName,
    handleChangeBuildingName,
    handleClickSubmit,
  } = useUserForm();

  return (
    <div className={style.userForm}>
      <div className={style.formGroup}>
        <div className={style.formLabel}>
          <FormLabel>氏名</FormLabel>
        </div>
        <div className={style.formInput}>
          <InputText
            value={name}
            placeholder="(例)トレタ 太郎"
            onChange={handleChangeName}
          />
        </div>
      </div>
      <div className={style.formGroup}>
        <div className={style.formLabel}>
          <FormLabel>Eメール</FormLabel>
        </div>
        <div className={style.formInput}>
          <InputText
            value={email}
            placeholder="(例)yoyaku@toreta.in"
            isError={isErrorEmail}
            errorMessage="正しいメールアドレスを入力してください"
            onChange={handleChangeEmail}
          />
        </div>
      </div>
      <div className={style.formGroup}>
        <div className={style.formLabel}>
          <FormLabel>郵便番号</FormLabel>
        </div>
        <div className={style.formInput}>
          <InputText
            value={zipCode}
            placeholder="(例)0000000"
            isError={isErrorZipCode}
            errorMessage="ハイフンを含めず半角数字で入力してください"
            onChange={handleChangeZipCode}
          />
        </div>
      </div>
      <div className={style.formGroup}>
        <div className={style.formLabel}>
          <FormLabel>都道府県</FormLabel>
        </div>
        <div className={style.formInput}>
          <InputSelect
            value={prefectures}
            options={PREFECTURES}
            onChange={handleChangePrefectures}
          />
        </div>
      </div>
      <div className={style.formGroup}>
        <div className={style.formLabel}>
          <FormLabel>市区町村・番地</FormLabel>
        </div>
        <div className={style.formInput}>
          <InputText
            value={streetAddress}
            placeholder="(例)品川区西五反田７丁目２２−１７"
            onChange={handleChangeStreetAddress}
          />
        </div>
      </div>
      <div className={style.formGroup}>
        <div className={style.formLabel}>
          <FormLabel>建物名・号室</FormLabel>
        </div>
        <div className={style.formInput}>
          <InputText
            value={buildingName}
            placeholder="(例)TOCビル 8F"
            onChange={handleChangeBuildingName}
          />
        </div>
      </div>
      <div className={style.button}>
        <Button onClick={handleClickSubmit}>登録</Button>
      </div>
    </div>
  );
}
