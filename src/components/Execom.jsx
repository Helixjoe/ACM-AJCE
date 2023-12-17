import execomList from "../assets/execomDetails"
import ExecomCard from "./ExecomCard"
function createEntry(execom) {
    const name = execom.name;
    const designation = execom.designation;
    const link = execom.linkedURL;
    const image = execom.photo;
    return (<ExecomCard name={name} des={designation} link={link} image={image} />);
}



function Execom() {
    return (<div id="execom" className="exSection"><h1>Execom</h1>
        <div className="exCard">{execomList.map(createEntry)}</div>
    </div>);
}
export default Execom;