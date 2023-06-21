import "../src/Section.css"


function Section () {
    return (
        <div className="d-flex text-center gap-2 bg-danger">
            <div className="card bg-info">
                <img src="https://cdn.pixabay.com/photo/2017/11/24/20/39/nissan-gtr-2975651_1280.jpg" /* style={{width:"50%"}} */ alt="" />
                <div className="card-body" style={{widht:"18rem"}}>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">CLICK</a>
                </div>
            </div>
            <div className="card bg-dark text-light">
                <img src="https://cdn.pixabay.com/photo/2019/03/03/23/03/nissan-4033040_640.jpg" /* style={{width:"50%"}} */ alt="" />
                <div className="card-body" style={{widht:"18rem"}}>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">CLICK</a>
                </div>
            </div>
            <div className="card bg-success">
                <img src="https://cdn.pixabay.com/photo/2017/06/06/20/35/auto-2378367_640.jpg" /* style={{width:"50%"}} */ alt="" />
                <div className="card-body" style={{widht:"18rem"}}>
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">CLICK</a>
                </div>
            </div>
        </div>
    )
}


export default Section;