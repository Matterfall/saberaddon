eventManager.on("rightClickItem", function(e) {

	if (e.getEntity().isAlive()) {

		var jaakutoggle = getAbility(e.getEntity(), 'jaakuname')

		if (jaakutoggle && jaakutoggle.isEnabled()) {
			e.getWorld().executeCommand('/playsound minecraft:custom.jaakuname master @a ~ ~ ~')

		}
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