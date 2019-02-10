#!/bin/bash

set -x

# Setup for overhead test: create action, create trigger, and create a number of rules as required.

count=${1:-1}   # Set count to $1. If $1 not set, set count to 1

wsk action create testAction testAction.js --kind nodejs:8
wsk trigger create testTrigger
for i in $(seq 1 $count); do
    wsk rule create testRule_$i testTrigger testAction;
done