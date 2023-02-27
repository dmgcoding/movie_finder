
import React from 'react'
import ReactSearchBox from 'react-search-box'

const Header = () => {
  return (
    <div className='g-header'>
        <div className="g-header__container">
            <div className="g-header__container-search">
                <div className="g-header__container-search__searchbarcontainer">
                    {/* <div className="g-header__container-search__searchbarcontainer-searchbar"></div>
                    <div className="g-header__container-search__searchbarcontainer-resultscontainer">

                    </div> */}
                    <ReactSearchBox
                        placeholder="Placeholder"
                        value="Doe"
                        data={this.data}
                        callback={(record) => console.log(record)}
                    />
                </div>
                <div className="g-header__container-search__switcher"></div>
            </div>
            <div className="g-header__container-trending"></div>
        </div>
    </div>
  )
}

export default Header