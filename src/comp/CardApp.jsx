import '../css/CardApp.css';

export function CardApp(props) {
    const { mensaje, mensajeDiv, childH5, childH4, childH3,childH32, spanH5, spanH4, spanH3, spanH32, childSpanH4, childSpanH5, childSpanH3, childSpanH32, childA, onClick, disabled } = props;

    return (
        <>

            <div className="card">
                <h5>{childH5}<span id={spanH5}>{childSpanH5}</span></h5>
                <h4>{childH4}<span id={spanH4} >{childSpanH4}</span></h4>
                <h3>{childH3} <span id={spanH3} > {childSpanH3}</span></h3>
                <h3>{childH32} <span id={spanH32} > {childSpanH32}</span></h3>

                <div id={mensaje} >{mensajeDiv}</div>

                <div className="botones-form">

                    <a
                        href="javascript:void(0);"
                        className="btn"
                        style={{
                            color: "black",
                            fontWeight: "bold",
                            cursor: disabled ? "not-allowed" : "pointer"
                        }}
                        onClick={onClick}
                        disabled={disabled}
                    >
                        {childA}
                    </a>
                </div>
            </div>
        </>
    );
}
