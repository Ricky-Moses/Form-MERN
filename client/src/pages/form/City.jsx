import React from 'react'

const district = [
    'Ariyalur',
    'Chengalpattu',
    'Chennai',
    'Coimbatore',
    'Cuddalore',
    'Dharmapuri',
    'Dindigul',
    'Erode',
    'Kallakurichi',
    'Kanchipuram',
    'Kanyakumari',
    'Karur',
    'Krishnagiri',
    'Madurai',
    'Mayiladuthurai',
    'Nagapattinam',
    'Namakkal',
    'Nilgiris',
    'Perambalur',
    'Pudukkottai',
    'Ramanathapuram',
    'Ranipet',
    'Salem',
    'Sivaganga',
    'Tenkasi',
    'Thanjavur',
    'Theni',
    'Thoothukudi',
    'Tiruchirappalli',
    'Tirunelveli',
    'Tirupathur',
    'Tiruppur',
    'Tiruvallur',
    'Tiruvannamalai',
    'Tiruvarur',
    'Vellore',
    'Viluppuram',
    'Virudhunagar'
];
const City = ({ data, setData }) => {

    const handleChange = (e) => {
        setData(prev => ({ ...prev, district: e.target.value }))
    }

    return (
        <tr className=''>
            <th className=''>City</th>
            <td className='text-2xl'>:</td>
            <td>
                <select
                    value={data.district}
                    name='district'
                    onChange={handleChange}
                    className="select bg-transparent !ps-2" required>
                    <option>--Select--</option>
                    {district.map(dist => (
                        <option key={dist} value={dist}>{dist}</option>
                    ))}
                </select>
            </td>
        </tr>
    )
}

export default City