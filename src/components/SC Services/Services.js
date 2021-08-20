import './Services.css';

const Services = ()=>{

    const services = [
        {name: 'Landscape Design', description: ''},
        {name: 'Planting/Mulching', description: ''},
        {name: 'Lawn Care', description: ''},
        {name: 'Hardscapes', description: ''},
        {name: 'Irrigation', description: ''},
        {name: 'Pool Demolition', description: ''},
        {name: 'Grading', description: ''},
        {name: 'Hedging', description: ''},
        {name: 'Concrete', description: ''},
        {name: 'Drainage', description: ''},
        {name: 'Rock Installation', description: ''},
        {name: 'Fertilization/Aeration', description: ''}
    ]

    const serviceH2s = services.map((h2)=>{
       return(
           <div className="grid-box">
               <h2>{h2.name}</h2>
            </div>
       )
    });

    return(
        <div id="service" className="services">
            <div className="services-container">
                <div className='items statement'>
                    <h1 className="black">We</h1>
                    <h1 className="black do">do</h1>
                    <h1 className="green">everything.</h1>
                </div>
                <div className='items list'>
                    {serviceH2s}
                </div>


            </div>
        </div>
    )

};
export default Services;