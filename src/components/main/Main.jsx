import {schedule} from '../../data.js'

function GetObjects(props){

    const obj = schedule.find(item=>item.nameObject === props.nameObject)
    if(!obj){
        return <div className="time_slot_result" data-bs-toggle="modal" data-bs-target="#exampleModal">Предмет не найден</div>
    }
    return(
        <div className="time_slot_result" data-bs-toggle="modal" data-bs-target="#exampleModal">
            {obj.nameObject} <br/>
            {obj.teacherName} <br/>
            {obj.cabinet} <br/>
        </div>
    )
}

const Main = () => {

    return (
        <>
            <main className="m-3">
                <div className="block bg-white p-3">
                    <div className="timetable">
                        <div className="time_header"></div>
                        <div className="day_header">22.04.2024 <br/> Понедельник</div>
                        <div className="day_header">23.04.2024 <br/> Вторник</div>
                        <div className="day_header">24.04.2024 <br/> Среда</div>
                        <div className="day_header">25.04.2024 <br/> Четверг</div>
                        <div className="day_header">26.04.2024 <br/> Пятница</div>
                        <div className="day_header">27.04.2024 <br/> Суббота</div>

                        <div className="time_slot">9:00 - 10:30</div>
                        <GetObjects nameObject="Разработка программных модулей"/>
                        <GetObjects nameObject="ПОПД"/>

                        <div className="time_slot">10:45 - 12:15</div>
                        <GetObjects nameObject="Разработка программных модулей"/>
                        <GetObjects nameObject="Основы алгоритмизации и программирования"/>
                        <GetObjects nameObject="Разработка программных модулей"/>
                        <GetObjects nameObject="Основы алгоритмизации и программирования"/>
                        <GetObjects nameObject="Разработка программных модулей"/>

                        <div className="time_slot">13:00 - 14:30</div>
                        <GetObjects nameObject="ПОПД"/>
                        <GetObjects nameObject="Основы алгоритмизации и программирования"/>
                        <GetObjects nameObject="ПОПД"/>
                        <GetObjects nameObject="ПОПД"/>
                        <div className="time_slot">14:40 - 16:10</div>
                        <GetObjects nameObject="ПОПД"/>
                        <GetObjects nameObject="Основы алгоритмизации и программирования"/>
                        <GetObjects nameObject="Дискретная математика с элементами мат. логики"/>
                        <GetObjects nameObject="ПОПД"/>

                        <div className="time_slot">16:20 - 17:50</div>

                        <div className="time_slot">18:00 - 19:30</div>

                    </div>
                </div>
            </main>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">О чем эта пара</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Закрыть"></button>
                        </div>
                        <div className="modal-body">
                            Ну это очень классная пара, вы не поверите
                        </div>
                        <div className="modal-footer">
                            <span>Илюха привет</span>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Понятно</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main