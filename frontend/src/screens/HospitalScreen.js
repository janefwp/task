import React, {useEffect} from 'react'
import { Form} from 'react-bootstrap'
import { useSelector, useDispatch} from 'react-redux'
import Hospital from '../components/Hospital'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {listHospitals} from '../actions/appActions'


function HospitalScreen({history}) {
    const dispatch = useDispatch()
    const hospitalList = useSelector(state=>state.hospitalList)
    const userinfo= useSelector(state=>state.userInfo)
    const {illnessItem, severityLevel} =userinfo
    const { error, loading, hospitals} = hospitalList
    useEffect(() => {
        console.log(hospitals)
        dispatch(listHospitals(severityLevel))
    }, [dispatch])
    return (
        <div>
            { loading ? <Loader /> 
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <Form>
                        <Form.Label><h2>Our Sugguested Hospitals (Illness: {illnessItem.name}, Severity:{severityLevel})</h2></Form.Label>
                        {
                            hospitals.map(hospital=>(
                                <Hospital key={hospital.id} hospital={hospital} severity={severityLevel} history={history} />
                            ))
                        }
                    </Form>

            }
            
        </div>
    )
}

export default HospitalScreen
