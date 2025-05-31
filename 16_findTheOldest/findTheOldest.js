const getAge = function(birth, death) {
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
};

const findTheOldest = function (people){
  return people.reduce((a, b) => {
      const last = getAge(a.yearOfBirth, a.yearOfDeath);
      const next = getAge(b.yearOfBirth, b.yearOfDeath);
      if (last < next){
        return b;
      } else{
        return a;
      }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
