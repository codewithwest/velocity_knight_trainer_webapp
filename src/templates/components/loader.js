import '../../styles/components/loader.css'

export default function Loader() {
    return (
        <div className='m-auto w-100 h-100'>
            <div className="loader-div d-flex wrap m-auto pos-rel">
                <div className="d-flex center-content">
                    <div className='d-flex center-content fw-bold'>
                        <div className='fill d-flex center-content'>
                            <div className="bolt"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
