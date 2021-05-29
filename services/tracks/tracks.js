import data from "MOCK_DATA.json"
export const tracks = () => {
  const PrimerItem = data.filter((x) => x.last_name === "Nuwe")
  const SecondItem = PrimerItem[0].id.replace(/[^\d]/g, "")
  const ThirdItem = data.filter((x) => !x.pet)
  const values = ThirdItem.map((x) => {
    const desc = x.ip.split(".")
    return desc[0]
  })
  const max = Math.max(...values)
  return {
      password: `${PrimerItem.length}-${SecondItem}-${max}`
  }
}
