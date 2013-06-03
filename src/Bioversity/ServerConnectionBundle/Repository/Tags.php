<?php

namespace Bioversity\ServerConnectionBundle\Repository;

use Bioversity\ServerConnectionBundle\Repository\Tags;
use Bioversity\ServerConnectionBundle\Repository\Operators;
use Bioversity\ServerConnectionBundle\Repository\ServerQueryManager;
use Bioversity\ServerConnectionBundle\Repository\ServerRequestManager;

class Tags
{
  const kTAG_NID= '_id';
  const kTAG_LID= '1';
  const kTAG_GID= '2';
  const kTAG_UID= '3';
  const kTAG_PID= '4';
  const kTAG_SYNONYMS= '5';
  const kTAG_DOMAIN= '6';
  const kTAG_AUTHORITY= '7';
  const kTAG_CATEGORY= '8';
  const kTAG_KIND= '9';
  const kTAG_TYPE= '10';
  const kTAG_CLASS= '11';
  const kTAG_NAMESPACE= '12';
  const kTAG_INPUT= '13';
  const kTAG_PATTERN= '14';
  const kTAG_LENGTH= '15';
  const kTAG_MIN_VAL= '16';
  const kTAG_MAX_VAL= '17';
  const kTAG_NAME= '18';
  const kTAG_LABEL= '19';
  const kTAG_DEFINITION= '20';
  const kTAG_DESCRIPTION= '21';
  const kTAG_NOTES= '22';
  const kTAG_EXAMPLES= '23';
  const kTAG_AUTHORS= '24';
  const kTAG_ACKNOWLEDGMENTS= '25';
  const kTAG_BIBLIOGRAPHY= '26';
  const kTAG_VERSION= '27';
  const kTAG_UNIT= '28';
  const kTAG_TERM= '29';
  const kTAG_NODE= '30';
  const kTAG_TAG= '31';
  const kTAG_SUBJECT= '32';
  const kTAG_OBJECT= '33';
  const kTAG_PREDICATE= '34';
  const kTAG_PATH= '35';
  const kTAG_NAMESPACE_REFS= '36';
  const kTAG_DATAPOINT_REFS= '37';
  const kTAG_NODES= '38';
  const kTAG_EDGES= '39';
  const kTAG_TAGS= '40';
  const kTAG_OFFSETS= '41';
  const kTAG_FEATURES= '42';
  const kTAG_METHODS= '43';
  const kTAG_SCALES= '44';
  const kTAG_USER_NAME= '45';
  const kTAG_USER_CODE= '46';
  const kTAG_USER_PASS= '47';
  const kTAG_USER_MAIL= '48';
  const kTAG_USER_ROLE= '49';
  const kTAG_USER_PROFILE= '50';
  const kTAG_USER_MANAGER= '51';
  const kTAG_USER_DOMAIN= '52';
  const kTAG_USER_INSTITUTE_CODE= '53';
  const kTAG_USER_INSTITUTE_NAME= '54';
  const kTAG_USER_INSTITUTE_ADDRESS= '55';
  const kTAG_USER_INSTITUTE_COUNTRY= '56';
  const kTAG_USER_SOCIAL_NETWORK= '57';  
  
  /**
   * This method return the server response for requested tag
   * @param string $tag
   * @param const $field (es: Tags::kTAG_GID)
   *
   * @return array $requestManager
   */
  public function getTagBy($tag, $field)
  {
    $requestManager= new ServerRequestManager();
    $requestManager->setDatabase('ONTOLOGY');
    $requestManager->setOperation('WS:OP:GetTag');
    $requestManager->setCollection(':_tags');
    $requestManager->setPageLimit(50);
    $requestManager->setQuery($field, Types::kTYPE_STRING, $tag, Operators::kOPERATOR_EQUAL);
    
    return $requestManager->sendRequest();
  }
}