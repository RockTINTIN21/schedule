import {useNavigate} from "react-router-dom";

const Header = ()=>{
    let navigate = useNavigate();
    return (

        <>
            <div className="m-3">
                <div className="container-fluid block p-3 bg-white d-flex">
                    <div className="col-10">
                        <h3>РАСПИСАНИЕ ЗАНЯТИЙ УРПЭТ</h3>
                        <p>22.04.2024 - 27.04.2024</p>
                    </div>
                    <div className="col-2">
                        <button onClick={() => navigate('/about')} className="btn btn-primary container-fluid m-2">Обо мне</button>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Header