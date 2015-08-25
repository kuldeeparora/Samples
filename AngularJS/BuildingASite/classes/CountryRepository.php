<?php

require 'Country.php';
require 'State.php';

class CountryRepository
{
    private static $countries = array();

    protected static function init(){
        $countries = array();

        array_push($countries,
            new Country('India', 'in', array(
                    new State('Delhi'), new State('Mumbai')
                )
            ));
        array_push($countries,
            new Country('United Kingdom', 'uk', array(
                new State('London'), new State('Birmingham')
            )));
        array_push($countries,
            new Country('Germany', 'de'));

        self::$countries = $countries;
    }

    public static function getCountries(){
        if(count(self::$countries) === 0){
            self::init();
        }
        return self::$countries;
    }
}