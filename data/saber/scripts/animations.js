eventManager.on("setRotationAngles", function(e) {

	// check if entity is living entity 

		// get ability from the title set
		var ability = getAbility(e.getEntity(), 'caliburslash');

		// if ability exists
		if (ability && ability.isEnabled()) {
			e.setRotationAngle('rightArm', 'x', 100);
			e.setRotationAngle('rightArm', 'x', -50);
			e.setRotationAngle('rightArm', 'y', -35);
			e.setRotationAngle('rightArm', 'x', -70);
			e.setRotationAngle('leftArm', 'y', 35);
			e.setRotationAngle('leftArm', 'x', -60);
		}
	
});

function getAbility(entity, ability) {
    var abilities = entity.getAbilities();
    for (var i = 0; i < abilities.length; i++) {
        if (abilities[i].getId() === ability)
            return abilities[i];
    }
    return null;
}