export default function primitiveSample() {
  const name = "Kairi Morishita"
  // name = 123 // numberの値を再代入しようとするとエラーになる
  console.log("primitive sample 1:", typeof name, name)

  const age = 28
  // age = "28" // stringの値を再代入しようとするとエラーになる
  console.log("primitive sample 2:", typeof age, age)

  const isSingle = true
  // isSingle = "foo" // stringの値を再代入しようとするとエラーになる
  console.log("primitive sample 3:", typeof isSingle, isSingle)

  const isOver20: boolean = age > 20 // 判定式の結果も代入できる
  console.log("primitive sample 4:", typeof isOver20, isOver20)
}
