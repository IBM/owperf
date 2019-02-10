#!/bin/bash

set -x

# Teardown for overhead test: Delete rules, then delete trigger and action

count=${1:-1}   # Set count to $1. If $1 not set, set count to 1

for i in $(seq 1 $count); do
    wsk rule delete testRule_$i;
done

wsk trigger delete testTrigger
wsk action delete testAction
