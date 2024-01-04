import { useState } from "react";
import { REGEX, URL } from "./UserForm.const";

export const useUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [zip, setZip] = useState("");
  const [isErrorZip, setIsErrorZip] = useState(false);
  const [prefecture, setPrefecture] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

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
  const handleChangeZip = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZip(event.target.value);
    setIsErrorZip(!isValidZip());
  };

  /**
   * 郵便番号のバリデーション
   */
  const isValidZip = () => REGEX.ZIP_CODE.test(zip);

  /**
   * 「都道府県」を変更
   */
  const handleChangePrefecture = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPrefecture(event.target.value);
  };

  /**
   * 「市区町村・番地」を変更
   */
  const handleChangeAddress1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress1(event.target.value);
  };

  /**
   * 「建物名・号室」を変更
   */
  const handleChangeAddress2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress2(event.target.value);
  };

  const isError =
    !name ||
    !email ||
    !zip ||
    !prefecture ||
    !address1 ||
    isErrorEmail ||
    isErrorZip;

  /**
   * 登録をクリック
   */
  const handleClickSubmit = async () => {
    if (isError) return;

    const body = {
      name,
      email,
      zip,
      prefecture,
      address1,
      address2,
    };

    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };

  return {
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
  };
};
