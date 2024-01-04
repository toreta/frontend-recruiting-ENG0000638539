export const TEXT = {
  NAME: "氏名",
  EMAIL: "Eメール",
  ZIP: "郵便番号",
  PREFECTURES: "都道府県",
  ADDRESS1: "市区町村・番地",
  ADDRESS2: "建物名・号室",
  BUTTON: "登録",
} as const;

export const PLACEHOLDER = {
  NAME: "(例)トレタ 太郎",
  EMAIL: "(例)yoyaku@toreta.in",
  ZIP: "(例)0000000",
  PREFECTURES: "都道府県を選択してください",
  ADDRESS1: "(例)品川区西五反田７丁目２２−１７",
  ADDRESS2: "(例)TOCビル 8F",
} as const;

export const ERROR_MESSAGE = {
  EMAIL: "正しいメールアドレスを入力してください",
  ZIP: "ハイフンを含めず半角数字で入力してください",
} as const;

export const REGEX = {
  ZIP_CODE: /^[0-9]{6}$/,
  EMAIL: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
} as const;

export const PREFECTURES = [
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
];

export const URL = "https://httpstat.us/201" as const;
