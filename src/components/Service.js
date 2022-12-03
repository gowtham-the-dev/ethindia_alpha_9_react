export default function Service({service}) {

    return <div className="col-md-4">
    <h1>{service.name}</h1>
    <p>{service.description}</p>
    <br/>
    <button className="getKeys">Get API Keys</button>
</div>

}