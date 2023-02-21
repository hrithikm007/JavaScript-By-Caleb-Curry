//TODO JSON is similar to JavaScript Objects but Keys also has double quotes

let position = {
    x: 10,
    y: 20,
    //! Function Inside Object ==> functionName : function() {}
    print: function()
    {
        console.log(`X: ${this.x}, Y: ${this.y}`);
    },

    nestedObj: {
        name: "DishaMuttin"
    }
}

console.log(position);
console.log(position.nestedObj.name);

let clonePosition = position

position.x = 7;

console.log({position,clonePosition}); // so both are pointing to same object
position.print()

//! Function outside objects works different way

glob = "global variable"

function print()
{
    //  scope is global window object
    // console.log(this); this prints global window
    console.log("Hrithik007 outside object",glob);
}

function print2()
{
    'use strict';
    console.log(this); // here this prints undefined
    console.log("Hrithik007 outside object strict mode",glob);
}

print();
print2();


