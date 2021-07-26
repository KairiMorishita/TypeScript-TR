export default function objectSample() {
  // const a: object = {
  //   name: 'Kairi',
  //   age: 28
  // }
  // a.name

  // オブジェクトリテラル記法で型定義
  let country: {
    language: string
    name: string
  } = {
    language: "Japanese",
    name: "Japan",
  }

  console.log("Object object sample 1:", country)

  country = {
    language: "English",
    name: "United States of America",
  }

  console.log("Object object sample 2:", country)

  // オプショナルとreadonly
  const Kairi: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 28,
    lastName: "Morishita",
    firstName: "Kairi",
  }

  Kairi.gender = "male"
  Kairi.lastName = "Kamado"
  // Kairi.firstName = 'Tanjiro'

  console.log("Object object sample 3:", Kairi)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: "Tokyo",
    Korea: "Seoul",
  }

  capitals.China = "Beijing"
  capitals.Canada = "Otawa"

  console.log("Object object sample 4:", capitals)
}
