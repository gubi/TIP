/**
 * Node Class
 * 
 */

var selected_node_data;
var selected_node_name;
var selected_node_code;
var selected_node_id;
var selected_node_description;
var selected_node_predicate;
var selected_node_show_predicate= false;
var selected_node_code_local;
var selected_node_class;
var selected_node_direction;

function setNodeProperty(node_detail)
{
  //console.log('setNodeProperty');
  selected_node_name        = getNodeName(node_detail);
  selected_node_code        = getNodeCode(node_detail);
  selected_node_code_local  = getNodeLocalCode(node_detail);
  selected_node_description = getNodeDescription(node_detail);
  selected_node_class       = getNodeClass(node_detail);
  selected_node_kind        = getNodeKind(node_detail);
}

function getRootNodeList()
{
  //console.log('getRootNodeList');
  ask(dev_env+urlForRootNodes, generateRootMenu);
}

function getNodeById()
{
  //console.log('getNodeById');
  ask(dev_env+urlForNodeDetails+'/'+selected_node_id, initializeNode);
}

function getNodeRelationINById(page)
{
  //console.log('getNodeRelationINById');
  ask(dev_env+urlForNodeRelationIN+'/'+selected_node_id+ (page ? '/'+page: ''), generateNodeRelationIN);
}

function getNodeRelationOUTById(page)
{
  //console.log('getNodeRelationOUTById');
  ask(dev_env+urlForNodeRelationOUT+'/'+selected_node_id+ (page ? '/'+page: ''), generateNodeRelationOUT);
}

function getNodeName(node)
{
  //console.log('getNodeName');
  return (node[kTAG_LABEL] !== undefined)? node[kTAG_LABEL]['en']: '';
}

function getNodeId(node)
{
  //console.log('getNodeId');
  return node['_id'];
}

function getNodeTerm(node)
{
  //console.log('getNodeTerm');
  return (node[kTAG_TERM] !== undefined)? node[kTAG_TERM]: '';
}

function getNodeCode(node)
{
  //console.log('getNodeCode');
  return (node[kTAG_GID] !== undefined)? node[kTAG_GID]: '';
}

function getNodeLocalCode(node)
{
  //console.log('getNodeLocalCode');
  return (node[kTAG_LID] !== undefined)? node[kTAG_LID]: '';
}

function getNodeClass(node)
{
  //console.log('getNodeClass');
  return (node[kTAG_CLASS] !== undefined)? node[kTAG_CLASS]: '';
}

function getNodeImage(node)
{
  //console.log('getNodeImage');
  return '/bundles/bioversityontology/images/slider/default.png';
}

function getNodeDescription(node)
{
  //console.log('getNodeDescription');
  return (node[kTAG_DESCRIPTION] !== undefined)? node[kTAG_DESCRIPTION]['en']: '';
}

function getNodePredicate(edge)
{
  //console.log('getNodePredicate');
  return (selected_node_data._term[edge[kTAG_PREDICATE]] !== undefined)?
            selected_node_data._term[edge[kTAG_PREDICATE]][kTAG_LABEL]['en']: '';
}

function getNodeDefinition(node)
{
  //console.log('getNodeDefinition');
  return (node[kTAG_DEFINITION] !== undefined)? node[kTAG_DEFINITION]['en']: '';
}

function getNodeKind(node)
{
  //console.log('getNodeKind');
  return (node[kTAG_KIND] !== undefined)? node[kTAG_KIND]: '';
}

function findNodePredicate(nodeId)
{
  //console.log('findNodePredicate');
  var predicate= null;
  //var pattReverter=new RegExp(" reverter");
  
  if(selected_node_data._edge[key][kTAG_VERTEX_OBJECT] == selected_node_id){
    setAppendDirection('right');
    predicate= getNodePredicate(value);
  }else if(selected_node_data._edge[key][kTAG_VERTEX_SUBJECT] == selected_node_id){
    setAppendDirection('left');
    predicate= getNodePredicate(value);
  }
  
  return predicate;
}

function setNodePredicate(predicate)
{
  //console.log('setNodePredicate');
  selected_node_predicate= predicate;
}

function setNodeId(node_id)
{
  //console.log('setNodeId');
  selected_node_id= node_id;
}

function isRoot(node)
{
  //console.log('isRoot');
  if(node[kTAG_DESCRIPTION][0] == ":ROOT")
    return true;
  else
    return false;
}