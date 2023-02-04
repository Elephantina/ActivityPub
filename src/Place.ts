import { ObjectFields } from './Object.ts'
import {
	AccuracyValue,
	AltitudeValue,
	LatitudeValue,
	LongitudeValue,
	ModelType,
	RadiusValue,
	UnitsValue,
} from './_type.ts'
import { Base } from './_base.ts'

/**
 * Represents a logical or physical location. See
 * {@link https://www.w3.org/TR/activitystreams-vocabulary/#places 5.3 Representing Places}
 * for additional information.
 *
 * {@link https://www.w3.org/ns/activitystreams#Place Docs}
 */
export class Place extends Base<PlaceFields> {
	static create(fields: PlaceFields) {
		return Base._create<PlaceFields>({
			type: ModelType.Place,
			...fields,
		})
	}
}

export interface PlaceFields extends ObjectFields {
	/**
	 * Indicates the accuracy of position coordinates on a Place objects.
	 * Expressed in properties of percentage. e.g. "94.0" means "94.0% accurate".
	 *
	 * {@link https://www.w3.org/ns/activitystreams#accuracy Docs}
	 */
	accuracy?: AccuracyValue

	/**
	 * Indicates the altitude of a place. The measurement units is indicated using the "units" property.
	 * If units is not specified, the default is assumed to be "m" indicating "meters".
	 *
	 * {@link https://www.w3.org/ns/activitystreams#altitude Docs}
	 */
	altitude?: AltitudeValue

	/**
	 * The latitude of a place
	 *
	 * {@link https://www.w3.org/ns/activitystreams#latitude Docs}
	 */
	latitude?: LatitudeValue

	/**
	 * The longitude of a place
	 *
	 * {@link https://www.w3.org/ns/activitystreams#longitude Docs}
	 */
	longitude?: LongitudeValue

	/**
	 * The radius from the given latitude and longitude for a Place.
	 * The units are expressed by the "units" property. If units is not specified,
	 * the default is assumed to be "m" indicating "meters".
	 *
	 * {@link https://www.w3.org/ns/activitystreams#radius Docs}
	 */
	radius?: RadiusValue

	/**
	 * Specifies the measurement units for the radius and altitude properties
	 * on a Place object. If not specified, the default is assumed to be "m" for "meters".
	 *
	 * {@link https://www.w3.org/ns/activitystreams#units Docs}
	 */
	units?: UnitsValue
}
