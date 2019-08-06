const DAY_IN_SECONDS = 86400;
const YEAR_IN_EARTH_DAYS = 365.25;

const PLANETS_to_ORBITAL_PERIOD = {
	earth: 1,
	mercury: 0.2408467,
	venus: 0.61519726,
	mars: 1.8808158,
	jupiter: 11.862615,
	saturn: 29.447498,
	uranus: 84.016846,
	neptune: 164.79132
}
export const age = (planet, seconds) => {
	return Number((seconds / (PLANETS_to_ORBITAL_PERIOD[planet] * DAY_IN_SECONDS * YEAR_IN_EARTH_DAYS)).toFixed(2));
};
