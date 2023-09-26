import FeaturedGigs from "@/components/FeaturedGigs"

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error("Failed!")
  }

  return res.json()
}

export default async function HomeContainer(){


  // const gigData = await Promise.all(data)

  return(
    <>
      {data && <FeaturedGigs data={data}/>}
    </>
    )
}