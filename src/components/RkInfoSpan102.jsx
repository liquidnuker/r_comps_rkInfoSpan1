function RkInfoSpan102_author(props) {
  return (
    <p><span className="rkinfospan102_icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
    <path d="M15 2H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM9 4.75c1.24 0 2.25 1.01 2.25 2.25S10.24 9.25 9 9.25 6.75 8.24 6.75 7 7.76 4.75 9 4.75zM13.5 14h-9v-.75c0-1.5 3-2.25 4.5-2.25s4.5.75 4.5 2.25V14z"/>
    </svg>
    </span>Posted by:&nbsp;<a href="">Author</a>
    <span className="rkinfospan102_separator" role="separator" aria-expanded="true" aria-orientation="horizontal">&nbsp;</span>
    </p>
  );
}

function RkInfoSpan102_date(props) {
  return (
    <p><span className="rkinfospan102_icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
    </svg>
    </span>Date:&nbsp;<date>Today</date>
    <span className="rkinfospan102_separator" role="separator" aria-expanded="true" aria-orientation="horizontal">&nbsp;</span>
    </p>
  );
}

function RkInfoSpan102_category(props) {
  return (
    <p><span className="rkinfospan102_icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
    </svg>
    </span>Category:&nbsp;<a href="">categoryname</a>
    <span className="rkinfospan102_separator" role="separator" aria-expanded="true" aria-orientation="horizontal">&nbsp;</span>
    </p>
  );
}

function RkInfoSpan102_comments(props) {
  return (
    <p><span className="rkinfospan102_icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/>
    </svg>
    </span>Comments:&nbsp;<a href="">{props.pr_commentNum}</a>
    </p>
  );
}

export default class RkInfoSpan102 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentNum: 27
    };

    // 
    // this.method1 = this.method1.bind(this);
  }

  // lifecycle hooks
  
  // methods
  method1() {
    this.setState(prevState => ({
      // property1: store.state
    }));
  }

  render() {
    return (
      <div className="rkinfospan102" role="contentinfo">
      <RkInfoSpan102_author />
      <RkInfoSpan102_date />
      <RkInfoSpan102_category />
      <RkInfoSpan102_comments pr_commentNum={this.state.commentNum} />     
      </div>
    );
  }
}