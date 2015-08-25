<?php

require '../classes/CountryRepository.php';

header('Content-type: application/json');

// security point of view add this to avoid downloading
echo ")]}'\n";

$countries = CountryRepository::getCountries();

echo json_encode($countries);