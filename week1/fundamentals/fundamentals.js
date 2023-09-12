const aCar = {
   owner : "Joe Bloggs",
   address: "3 Walkers Lane",
   previous_owners: [
      {name: 'Pat Smith', address: '1 Main Street'},
      {name: 'Sheila Dwyer', address: '2 High Street'}
    ],
   type : {
      make:'Toyota',
      model:' Corolla 1.8',
   },
   reg : {
      year: 201,
      county: 'WD',
      num: 1058,
   },
   mileage: 10000,
   colour: {
      exterior: 'Red',
      interior: {
         texture: 'Leather',
         shade: 'Cream'
      }
   }
 };
 
 console.log(aCar.owner);
 console.log(aCar.owner + ' drives a ' + aCar.type.make)

 console.log('Registration: ' + aCar.reg.year + aCar.reg.county + aCar.reg.num)
 console.log(aCar.colour.exterior + aCar.colour.interior.texture + aCar.colour.interior.shade)

 console.log('First owner : ' + aCar.previous_owners[0].name + ' at ' +aCar.previous_owners[0].address)

for (let i = 0 ; i < aCar.previous_owners.length ; i += 1) {
   console.log(aCar.previous_owners[i].name) ;
}