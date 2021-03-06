<?php

namespace Bioversity\ServerConnectionBundle\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Bioversity\ServerConnectionBundle\Repository\Tags;
use Bioversity\ServerConnectionBundle\Repository\Terms;
use Bioversity\ServerConnectionBundle\Repository\Nodes;
use Bioversity\ServerConnectionBundle\Repository\AutocompleteMethod;
use Bioversity\ServerConnectionBundle\Repository\ServerConnection;

class ServerConnectionController extends Controller
{
    public function jsonFindLidAction($lid, $namespace=null)
    {
        $server= new AutocompleteMethod();
        return  new Response(json_encode($server->findLID($lid,$namespace)));
    }
    
    public function jsonFindLabelAction($label)
    {
        $server= new AutocompleteMethod();
        return  new Response(json_encode($server->findLABEL($label)));
    }
    
    public function jsonFindNamespaceAction($word)
    {
        $server= new AutocompleteMethod();
        return  new Response(json_encode($server->findNAMESPACE($word)));
    }
    
    public function jsonFindGidAction($gid)
    {
        $server= new AutocompleteMethod();
        return  new Response(json_encode($server->findGID($gid)));
    }
    
    public function jsonFindTraitAction($word)
    {
        $server= new AutocompleteMethod();
        return  new Response(json_encode($server->findTrait($word)));
    }
    
    public function jsonFindTagByLabelAction($word)
    {
        $server= new AutocompleteMethod();
        return  new Response(json_encode($server->findTagByLabel($word)));
    }
    
    public function jsonFindTaxoAction($word, $trait)
    {
        $server= new AutocompleteMethod();
        return  new Response(json_encode($server->findTaxo($word, $trait)));
    }
    
    public function jsonGetTermAction($lid, $namespace=null)
    {
        $server= new Terms();
        $response= $server->getTerm($lid,$namespace);
        return new Response(json_encode($response->getResponse()->getAllResponse()));
    }
    
}
