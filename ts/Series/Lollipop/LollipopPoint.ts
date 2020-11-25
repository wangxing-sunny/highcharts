/* *
 *
 *  (c) 2010-2020 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

'use strict';

/* *
 *
 *  Imports
 *
 * */
import type LollipopPointOptions from './LollipopPointOptions';
import type LollipopSeries from './LollipopSeries';
import AreaSeries from '../Area/AreaSeries.js';
const { prototype: areaProto } = AreaSeries;
import DumbbellPoint from '../Dumbbell/DumbbellPoint.js';
import Point from '../../Core/Series/Point.js';
import U from '../../Core/Utilities.js';
const {
    isObject,
    extend
} = U;

/* *
 *
 *  Class
 *
 * */

class LollipopPoint extends DumbbellPoint {
    public series: LollipopSeries = void 0 as any;
    public options: LollipopPointOptions = void 0 as any;
}

/* *
 *
 *  Prototype properties
 *
 * */

extend(LollipopPoint.prototype, {
    pointSetState: areaProto.pointClass.prototype.setState,
    setState: DumbbellPoint.prototype.setState,
    // Does not work with the inherited `isvalid`
    isValid: Point.prototype.isValid,
    init: function (
        series: LollipopSeries,
        options: LollipopPointOptions,
        x?: number
    ): Point {
        if (isObject(options) && 'low' in options) {
            options.y = options.low;
            delete options.low;
        }
        return Point.prototype.init.apply(this, arguments);
    }
});

/* *
 *
 *  Default export
 *
 * */

export default LollipopPoint;
