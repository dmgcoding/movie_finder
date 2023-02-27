
import React,{useState} from 'react'
import arrow_icon from './../../assets/left.png'
import './CustomDropdown.css'

const CustomDropDown = ({items,selectedItem,callback}) => {
    
    const [dropdownOpen, setDropdownOpen] = useState(false)

    function onDropDownClick(){
        setDropdownOpen(val=>!val)
    }

    function onDropItemClick(item){
        callback(item)
        setDropdownOpen(false)
    }

    return (
        <div className='g-dropdown'>
            <div className='g-dropdown__content' onClick={()=>{onDropDownClick()}}>
                {selectedItem.desc}
                <img src={arrow_icon} width={20}/>
            </div>
            <div className={`g-dropdown__itemscontainer ${dropdownOpen ? 'g-dropdown-visible' : ''}`}>
                {items.map(item=>(
                    <div key={item.value} className='g-dropdown__itemscontainer-item' onClick={()=>{onDropItemClick(item)}}>{item.desc}</div>
                ))}
            </div>
        </div>
    )
}

export default CustomDropDown