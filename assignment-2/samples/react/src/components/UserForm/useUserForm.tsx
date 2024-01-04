import { useState } from "react";
import { REGEX } from "./UserForm.const";

export const useUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [zipCode, setZipCode] = useState("");
  const [isErrorZipCode, setIsErrorZipCode] = useState(false);
  const [prefectures, setPrefectures] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [buildingName, setBuildingName] = useState("");

  /**
   * 「氏名」を変更
   */
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  /**
   * 「Eメール」を変更
   */
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsErrorEmail(!isValidEmail());
  };

  /**
   * Eメールのバリデーション
   */
  const isValidEmail = () => REGEX.EMAIL.test(email);

  /**
   * 「郵便番号」を変更
   */
  const handleChangeZipCode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(event.target.value);
    setIsErrorZipCode(!isValidZipCode());
  };

  /**
   * 郵便番号のバリデーション
   */
  const isValidZipCode = () => REGEX.ZIP_CODE.test(zipCode);

  /**
   * 「都道府県」を変更
   */
  const handleChangePrefectures = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPrefectures(event.target.value);
  };

  /**
   * 「市区町村・番地」を変更
   */
  const handleChangeStreetAddress = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStreetAddress(event.target.value);
  };

  /**
   * 「建物名・号室」を変更
   */
  const handleChangeBuildingName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBuildingName(event.target.value);
  };

  /**
   * 登録をクリック
   */
  const handleClickSubmit = () => {
    // TODO: 登録処理
  };

  return {
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
  };
};
