import * as React from 'react';
import { connect } from "react-redux";
import <%= component %> from './<%= component %>';
import { <%= dispatch %> } from '../../actions/<%= actions %>'; // replace with correct export and path

// replace state and property with correct elements from reducer
const mapStateToProps = ({ <%= state %>: { <%= property %>}}) =>
    { return { <%= property %>}}
    
// replace dispatch with import from actions
const mapDispatchToProps = { <%= dispatch %> }

// replace property with names from mapStateToProps
const <%= component %>Container = ({
    <%= property %>, <%= dispatch %>
}) => (
    <<%= component %> 
        <%= property %>={<%= property %>}
        <%= dispatch %>={<%= dispatch %>}
    />
)

export default connect(mapStateToProps, mapDispatchToProps)(<%= component %>Container);