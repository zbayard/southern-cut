import './Services.css';

const Services = ()=>{

    const services = [
        {name: 'Landscape Design', description: ''},
        {name: 'Planting', description: ''},
        {name: 'Mulching', description: ''},
        {name: 'Leaf Control', description: ''},
        {name: 'Hardscapes', description: ''},
        {name: 'Irrigation', description: ''},
        {name: 'Pool Demolition', description: ''},
        {name: 'Grading', description: ''},
        {name: 'Hedging', description: ''},
        {name: 'Concrete', description: ''},
        {name: 'Drainage', description: ''},
        {name: 'Rock Installation', description: ''},
        {name: 'Mowing', description: ''},
        {name: 'Fertilization', description: ''},
        {name: 'Aeration', description: ''}
    ]

    const serviceH2s = services.map((h2)=>{
       return(
           <h2>{h2.name}</h2>
       )
    });

    return(
        <div id="service" className="services">
            <div className="services-container">
                <div className='items statement'>
                    <h1 className="black">We</h1>
                    <h1 className="black">do</h1>
                    <h1 className="black">it</h1>
                    <h1 className="green">all.</h1>
                </div>
                <div className='items list'>
                    {serviceH2s}
                </div>


            </div>
        </div>
    )

};
export default Services;