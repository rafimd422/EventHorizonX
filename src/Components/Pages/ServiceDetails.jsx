import { Helmet, HelmetData } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom'

const ServiceDetails = () => {

    const {id} = useParams()
    const data = useLoaderData()
    const parseId = parseInt(id)
// console.log(data, parseId)

const getData = data.find(data => 
    data.id === parseId
)
console.log(getData)

const helmetData = new HelmetData({});

    return (
        <>
        <Helmet helmetData={helmetData}>
        <title>{getData.title} | EventHorizonX</title>
      </Helmet>
    <div>
      Hello world
    </div>
    </>
  )
}

export default ServiceDetails
