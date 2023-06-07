import "../App.css"

export default function FrontPage(props) {
    const mainWindow = props.MW;
    const setMainWindow = props.setMW;

    function onClick() {
        if (mainWindow === "home")
        setMainWindow("classes");
        else
        setMainWindow("home");
    }

    let button;
    button = <button onClick={onClick} className="Button"><h2>{mainWindow === "classes" ? "Back" : "Classes"}</h2></button>;

    return (
        <>
        <div style={{ fontSize: 60, color: "#F1CE05" }}>
            WORLD OF WARCRAFT
           <p style={{ fontSize: 34 }}>DRAGONFLIGHT</p>
        </div>
        <div style={{ height: 50 }}></div>
        {button}
        </>
    )
}