import RkInfoSpan101 from "./RkInfoSpan101.jsx"
import RkInfoSpan102 from "./RkInfoSpan102.jsx"
import RkInfoSpan103 from "./RkInfoSpan103.jsx"

export default function Home(props) {
  return (
    <div>

  {/*rkInfoSpan101*/}
    <h2 className="item-id">rkinfoSpan101</h2>
    <div className="row">
      <div className="col-sm-3">39</div>
      <div className="col-sm-9">
      <RkInfoSpan101 />
      </div>
    </div>

  {/*rkInfoSpan102*/}
    <h2 className="item-id">rkinfoSpan102</h2>
    <div className="row">
      <div className="col-sm-3">39</div>
      <div className="col-sm-9">
      <RkInfoSpan102 />
      </div>
    </div>

  {/*rkInfoSpan103*/}
    <h2 className="item-id">rkinfoSpan103</h2>
    <div className="row">
      <div className="col-sm-3">39</div>
      <div className="col-sm-9">
      <RkInfoSpan103 />
      </div>
    </div>

    </div>
  );
}