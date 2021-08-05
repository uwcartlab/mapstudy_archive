!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.ss=t()}}(function(){return function t(r,n,e){function i(o,a){if(!n[o]){if(!r[o]){var u="function"==typeof require&&require;if(!a&&u)return u(o,!0);if(s)return s(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[o]={exports:{}};r[o][0].call(l.exports,function(t){var n=r[o][1][t];return i(n?n:t)},l,l.exports,t,r,n,e)}return n[o].exports}for(var s="function"==typeof require&&require,o=0;o<e.length;o++)i(e[o]);return i}({1:[function(t,r,n){"use strict";var e=r.exports={};e.linearRegression=t("./src/linear_regression"),e.linearRegressionLine=t("./src/linear_regression_line"),e.standardDeviation=t("./src/standard_deviation"),e.rSquared=t("./src/r_squared"),e.mode=t("./src/mode"),e.min=t("./src/min"),e.max=t("./src/max"),e.sum=t("./src/sum"),e.quantile=t("./src/quantile"),e.quantileSorted=t("./src/quantile_sorted"),e.iqr=e.interquartileRange=t("./src/interquartile_range"),e.medianAbsoluteDeviation=e.mad=t("./src/mad"),e.chunk=t("./src/chunk"),e.shuffle=t("./src/shuffle"),e.shuffleInPlace=t("./src/shuffle_in_place"),e.sample=t("./src/sample"),e.ckmeans=t("./src/ckmeans"),e.sortedUniqueCount=t("./src/sorted_unique_count"),e.sumNthPowerDeviations=t("./src/sum_nth_power_deviations"),e.sampleCovariance=t("./src/sample_covariance"),e.sampleCorrelation=t("./src/sample_correlation"),e.sampleVariance=t("./src/sample_variance"),e.sampleStandardDeviation=t("./src/sample_standard_deviation"),e.sampleSkewness=t("./src/sample_skewness"),e.geometricMean=t("./src/geometric_mean"),e.harmonicMean=t("./src/harmonic_mean"),e.mean=e.average=t("./src/mean"),e.median=t("./src/median"),e.rootMeanSquare=e.rms=t("./src/root_mean_square"),e.variance=t("./src/variance"),e.tTest=t("./src/t_test"),e.tTestTwoSample=t("./src/t_test_two_sample"),e.bayesian=t("./src/bayesian_classifier"),e.perceptron=t("./src/perceptron"),e.epsilon=t("./src/epsilon"),e.factorial=t("./src/factorial"),e.bernoulliDistribution=t("./src/bernoulli_distribution"),e.binomialDistribution=t("./src/binomial_distribution"),e.poissonDistribution=t("./src/poisson_distribution"),e.chiSquaredGoodnessOfFit=t("./src/chi_squared_goodness_of_fit"),e.zScore=t("./src/z_score"),e.cumulativeStdNormalProbability=t("./src/cumulative_std_normal_probability"),e.standardNormalTable=t("./src/standard_normal_table"),e.errorFunction=e.erf=t("./src/error_function"),e.inverseErrorFunction=t("./src/inverse_error_function"),e.probit=t("./src/probit"),e.mixin=t("./src/mixin")},{"./src/bayesian_classifier":2,"./src/bernoulli_distribution":3,"./src/binomial_distribution":4,"./src/chi_squared_goodness_of_fit":6,"./src/chunk":7,"./src/ckmeans":8,"./src/cumulative_std_normal_probability":9,"./src/epsilon":10,"./src/error_function":11,"./src/factorial":12,"./src/geometric_mean":13,"./src/harmonic_mean":14,"./src/interquartile_range":15,"./src/inverse_error_function":16,"./src/linear_regression":17,"./src/linear_regression_line":18,"./src/mad":19,"./src/max":20,"./src/mean":21,"./src/median":22,"./src/min":23,"./src/mixin":24,"./src/mode":25,"./src/perceptron":27,"./src/poisson_distribution":28,"./src/probit":29,"./src/quantile":30,"./src/quantile_sorted":31,"./src/r_squared":32,"./src/root_mean_square":33,"./src/sample":34,"./src/sample_correlation":35,"./src/sample_covariance":36,"./src/sample_skewness":37,"./src/sample_standard_deviation":38,"./src/sample_variance":39,"./src/shuffle":40,"./src/shuffle_in_place":41,"./src/sorted_unique_count":42,"./src/standard_deviation":43,"./src/standard_normal_table":44,"./src/sum":45,"./src/sum_nth_power_deviations":46,"./src/t_test":47,"./src/t_test_two_sample":48,"./src/variance":49,"./src/z_score":50}],2:[function(t,r,n){"use strict";function e(){this.totalCount=0,this.data={}}e.prototype.train=function(t,r){this.data[r]||(this.data[r]={});for(var n in t){var e=t[n];void 0===this.data[r][n]&&(this.data[r][n]={}),void 0===this.data[r][n][e]&&(this.data[r][n][e]=0),this.data[r][n][t[n]]++}this.totalCount++},e.prototype.score=function(t){var r,n={};for(var e in t){var i=t[e];for(r in this.data)void 0===n[r]&&(n[r]={}),this.data[r][e]?n[r][e+"_"+i]=(this.data[r][e][i]||0)/this.totalCount:n[r][e+"_"+i]=0}var s={};for(r in n)for(var o in n[r])void 0===s[r]&&(s[r]=0),s[r]+=n[r][o];return s},r.exports=e},{}],3:[function(t,r,n){"use strict";function e(t){return 0>t||t>1?null:i(1,t)}var i=t("./binomial_distribution");r.exports=e},{"./binomial_distribution":4}],4:[function(t,r,n){"use strict";function e(t,r){if(0>r||r>1||0>=t||t%1!==0)return null;var n=0,e=0,o={};do o[n]=s(t)/(s(n)*s(t-n))*(Math.pow(r,n)*Math.pow(1-r,t-n)),e+=o[n],n++;while(1-i>e);return o}var i=t("./epsilon"),s=t("./factorial");r.exports=e},{"./epsilon":10,"./factorial":12}],5:[function(t,r,n){"use strict";var e={1:{.995:0,.99:0,.975:0,.95:0,.9:.02,.5:.45,.1:2.71,.05:3.84,.025:5.02,.01:6.63,.005:7.88},2:{.995:.01,.99:.02,.975:.05,.95:.1,.9:.21,.5:1.39,.1:4.61,.05:5.99,.025:7.38,.01:9.21,.005:10.6},3:{.995:.07,.99:.11,.975:.22,.95:.35,.9:.58,.5:2.37,.1:6.25,.05:7.81,.025:9.35,.01:11.34,.005:12.84},4:{.995:.21,.99:.3,.975:.48,.95:.71,.9:1.06,.5:3.36,.1:7.78,.05:9.49,.025:11.14,.01:13.28,.005:14.86},5:{.995:.41,.99:.55,.975:.83,.95:1.15,.9:1.61,.5:4.35,.1:9.24,.05:11.07,.025:12.83,.01:15.09,.005:16.75},6:{.995:.68,.99:.87,.975:1.24,.95:1.64,.9:2.2,.5:5.35,.1:10.65,.05:12.59,.025:14.45,.01:16.81,.005:18.55},7:{.995:.99,.99:1.25,.975:1.69,.95:2.17,.9:2.83,.5:6.35,.1:12.02,.05:14.07,.025:16.01,.01:18.48,.005:20.28},8:{.995:1.34,.99:1.65,.975:2.18,.95:2.73,.9:3.49,.5:7.34,.1:13.36,.05:15.51,.025:17.53,.01:20.09,.005:21.96},9:{.995:1.73,.99:2.09,.975:2.7,.95:3.33,.9:4.17,.5:8.34,.1:14.68,.05:16.92,.025:19.02,.01:21.67,.005:23.59},10:{.995:2.16,.99:2.56,.975:3.25,.95:3.94,.9:4.87,.5:9.34,.1:15.99,.05:18.31,.025:20.48,.01:23.21,.005:25.19},11:{.995:2.6,.99:3.05,.975:3.82,.95:4.57,.9:5.58,.5:10.34,.1:17.28,.05:19.68,.025:21.92,.01:24.72,.005:26.76},12:{.995:3.07,.99:3.57,.975:4.4,.95:5.23,.9:6.3,.5:11.34,.1:18.55,.05:21.03,.025:23.34,.01:26.22,.005:28.3},13:{.995:3.57,.99:4.11,.975:5.01,.95:5.89,.9:7.04,.5:12.34,.1:19.81,.05:22.36,.025:24.74,.01:27.69,.005:29.82},14:{.995:4.07,.99:4.66,.975:5.63,.95:6.57,.9:7.79,.5:13.34,.1:21.06,.05:23.68,.025:26.12,.01:29.14,.005:31.32},15:{.995:4.6,.99:5.23,.975:6.27,.95:7.26,.9:8.55,.5:14.34,.1:22.31,.05:25,.025:27.49,.01:30.58,.005:32.8},16:{.995:5.14,.99:5.81,.975:6.91,.95:7.96,.9:9.31,.5:15.34,.1:23.54,.05:26.3,.025:28.85,.01:32,.005:34.27},17:{.995:5.7,.99:6.41,.975:7.56,.95:8.67,.9:10.09,.5:16.34,.1:24.77,.05:27.59,.025:30.19,.01:33.41,.005:35.72},18:{.995:6.26,.99:7.01,.975:8.23,.95:9.39,.9:10.87,.5:17.34,.1:25.99,.05:28.87,.025:31.53,.01:34.81,.005:37.16},19:{.995:6.84,.99:7.63,.975:8.91,.95:10.12,.9:11.65,.5:18.34,.1:27.2,.05:30.14,.025:32.85,.01:36.19,.005:38.58},20:{.995:7.43,.99:8.26,.975:9.59,.95:10.85,.9:12.44,.5:19.34,.1:28.41,.05:31.41,.025:34.17,.01:37.57,.005:40},21:{.995:8.03,.99:8.9,.975:10.28,.95:11.59,.9:13.24,.5:20.34,.1:29.62,.05:32.67,.025:35.48,.01:38.93,.005:41.4},22:{.995:8.64,.99:9.54,.975:10.98,.95:12.34,.9:14.04,.5:21.34,.1:30.81,.05:33.92,.025:36.78,.01:40.29,.005:42.8},23:{.995:9.26,.99:10.2,.975:11.69,.95:13.09,.9:14.85,.5:22.34,.1:32.01,.05:35.17,.025:38.08,.01:41.64,.005:44.18},24:{.995:9.89,.99:10.86,.975:12.4,.95:13.85,.9:15.66,.5:23.34,.1:33.2,.05:36.42,.025:39.36,.01:42.98,.005:45.56},25:{.995:10.52,.99:11.52,.975:13.12,.95:14.61,.9:16.47,.5:24.34,.1:34.28,.05:37.65,.025:40.65,.01:44.31,.005:46.93},26:{.995:11.16,.99:12.2,.975:13.84,.95:15.38,.9:17.29,.5:25.34,.1:35.56,.05:38.89,.025:41.92,.01:45.64,.005:48.29},27:{.995:11.81,.99:12.88,.975:14.57,.95:16.15,.9:18.11,.5:26.34,.1:36.74,.05:40.11,.025:43.19,.01:46.96,.005:49.65},28:{.995:12.46,.99:13.57,.975:15.31,.95:16.93,.9:18.94,.5:27.34,.1:37.92,.05:41.34,.025:44.46,.01:48.28,.005:50.99},29:{.995:13.12,.99:14.26,.975:16.05,.95:17.71,.9:19.77,.5:28.34,.1:39.09,.05:42.56,.025:45.72,.01:49.59,.005:52.34},30:{.995:13.79,.99:14.95,.975:16.79,.95:18.49,.9:20.6,.5:29.34,.1:40.26,.05:43.77,.025:46.98,.01:50.89,.005:53.67},40:{.995:20.71,.99:22.16,.975:24.43,.95:26.51,.9:29.05,.5:39.34,.1:51.81,.05:55.76,.025:59.34,.01:63.69,.005:66.77},50:{.995:27.99,.99:29.71,.975:32.36,.95:34.76,.9:37.69,.5:49.33,.1:63.17,.05:67.5,.025:71.42,.01:76.15,.005:79.49},60:{.995:35.53,.99:37.48,.975:40.48,.95:43.19,.9:46.46,.5:59.33,.1:74.4,.05:79.08,.025:83.3,.01:88.38,.005:91.95},70:{.995:43.28,.99:45.44,.975:48.76,.95:51.74,.9:55.33,.5:69.33,.1:85.53,.05:90.53,.025:95.02,.01:100.42,.005:104.22},80:{.995:51.17,.99:53.54,.975:57.15,.95:60.39,.9:64.28,.5:79.33,.1:96.58,.05:101.88,.025:106.63,.01:112.33,.005:116.32},90:{.995:59.2,.99:61.75,.975:65.65,.95:69.13,.9:73.29,.5:89.33,.1:107.57,.05:113.14,.025:118.14,.01:124.12,.005:128.3},100:{.995:67.33,.99:70.06,.975:74.22,.95:77.93,.9:82.36,.5:99.33,.1:118.5,.05:124.34,.025:129.56,.01:135.81,.005:140.17}};r.exports=e},{}],6:[function(t,r,n){"use strict";function e(t,r,n){for(var e,o,a=i(t),u=0,c=1,l=r(a),f=[],h=[],p=0;p<t.length;p++)void 0===f[t[p]]&&(f[t[p]]=0),f[t[p]]++;for(p=0;p<f.length;p++)void 0===f[p]&&(f[p]=0);for(o in l)o in f&&(h[o]=l[o]*t.length);for(o=h.length-1;o>=0;o--)h[o]<3&&(h[o-1]+=h[o],h.pop(),f[o-1]+=f[o],f.pop());for(o=0;o<f.length;o++)u+=Math.pow(f[o]-h[o],2)/h[o];return e=f.length-c-1,s[e][n]<u}var i=t("./mean"),s=t("./chi_squared_distribution_table");r.exports=e},{"./chi_squared_distribution_table":5,"./mean":21}],7:[function(t,r,n){"use strict";function e(t,r){var n=[];if(0>=r)return null;for(var e=0;e<t.length;e+=r)n.push(t.slice(e,e+r));return n}r.exports=e},{}],8:[function(t,r,n){"use strict";function e(t,r){for(var n=[],e=0;t>e;e++){for(var i=[],s=0;r>s;s++)i.push(0);n.push(i)}return n}function i(t,r){if(r>t.length)throw new Error("Cannot generate more classes than there are data values");var n=o(t),i=s(n);if(1===i)return[n];for(var a=e(r,n.length),u=e(r,n.length),c=0;r>c;c++)for(var l=n[0],f=Math.max(c,1);f<n.length;f++)if(0===c){var h=Math.pow(n[f]-l,2);a[c][f]=a[c][f-1]+(f-1)/f*h;var p=f*l+n[f];l=p/f}else for(var _=0,v=0,d=f;d>=c;d--)_+=(f-d)/(f-d+1)*Math.pow(n[d]-v,2),v=(n[d]+(f-d)*v)/(f-d+1),d===f?(a[c][f]=_,u[c][f]=d,d>0&&(a[c][f]+=a[c-1][d-1])):0===d?_<=a[c][f]&&(a[c][f]=_,u[c][f]=d):_+a[c-1][d-1]<a[c][f]&&(a[c][f]=_+a[c-1][d-1],u[c][f]=d);var m=[],g=u[0].length-1;for(c=u.length-1;c>=0;c--){var x=u[c][g];m[c]=n.slice(x,g+1),c>0&&(g=x-1)}return m}var s=t("./sorted_unique_count"),o=t("./numeric_sort");r.exports=i},{"./numeric_sort":26,"./sorted_unique_count":42}],9:[function(t,r,n){"use strict";function e(t){var r=Math.abs(t),n=Math.min(Math.round(100*r),i.length-1);return t>=0?i[n]:+(1-i[n]).toFixed(4)}var i=t("./standard_normal_table");r.exports=e},{"./standard_normal_table":44}],10:[function(t,r,n){"use strict";var e=1e-4;r.exports=e},{}],11:[function(t,r,n){"use strict";function e(t){var r=1/(1+.5*Math.abs(t)),n=r*Math.exp(-Math.pow(t,2)-1.26551223+1.00002368*r+.37409196*Math.pow(r,2)+.09678418*Math.pow(r,3)-.18628806*Math.pow(r,4)+.27886807*Math.pow(r,5)-1.13520398*Math.pow(r,6)+1.48851587*Math.pow(r,7)-.82215223*Math.pow(r,8)+.17087277*Math.pow(r,9));return t>=0?1-n:n-1}r.exports=e},{}],12:[function(t,r,n){"use strict";function e(t){if(0>t)return null;for(var r=1,n=2;t>=n;n++)r*=n;return r}r.exports=e},{}],13:[function(t,r,n){"use strict";function e(t){if(0===t.length)return null;for(var r=1,n=0;n<t.length;n++){if(t[n]<=0)return null;r*=t[n]}return Math.pow(r,1/t.length)}r.exports=e},{}],14:[function(t,r,n){"use strict";function e(t){if(0===t.length)return null;for(var r=0,n=0;n<t.length;n++){if(t[n]<=0)return null;r+=1/t[n]}return t.length/r}r.exports=e},{}],15:[function(t,r,n){"use strict";function e(t){return 0===t.length?null:i(t,.75)-i(t,.25)}var i=t("./quantile");r.exports=e},{"./quantile":30}],16:[function(t,r,n){"use strict";function e(t){var r=8*(Math.PI-3)/(3*Math.PI*(4-Math.PI)),n=Math.sqrt(Math.sqrt(Math.pow(2/(Math.PI*r)+Math.log(1-t*t)/2,2)-Math.log(1-t*t)/r)-(2/(Math.PI*r)+Math.log(1-t*t)/2));return t>=0?n:-n}r.exports=e},{}],17:[function(t,r,n){"use strict";function e(t){var r,n,e=t.length;if(1===e)r=0,n=t[0][1];else{for(var i,s,o,a=0,u=0,c=0,l=0,f=0;e>f;f++)i=t[f],s=i[0],o=i[1],a+=s,u+=o,c+=s*s,l+=s*o;r=(e*l-a*u)/(e*c-a*a),n=u/e-r*a/e}return{m:r,b:n}}r.exports=e},{}],18:[function(t,r,n){"use strict";function e(t){return function(r){return t.b+t.m*r}}r.exports=e},{}],19:[function(t,r,n){"use strict";function e(t){if(!t||0===t.length)return null;for(var r=i(t),n=[],e=0;e<t.length;e++)n.push(Math.abs(t[e]-r));return i(n)}var i=t("./median");r.exports=e},{"./median":22}],20:[function(t,r,n){"use strict";function e(t){for(var r,n=0;n<t.length;n++)(t[n]>r||void 0===r)&&(r=t[n]);return r}r.exports=e},{}],21:[function(t,r,n){"use strict";function e(t){return 0===t.length?null:i(t)/t.length}var i=t("./sum");r.exports=e},{"./sum":45}],22:[function(t,r,n){"use strict";function e(t){if(0===t.length)return null;var r=i(t);if(r.length%2===1)return r[(r.length-1)/2];var n=r[r.length/2-1],e=r[r.length/2];return(n+e)/2}var i=t("./numeric_sort");r.exports=e},{"./numeric_sort":26}],23:[function(t,r,n){"use strict";function e(t){for(var r,n=0;n<t.length;n++)(t[n]<r||void 0===r)&&(r=t[n]);return r}r.exports=e},{}],24:[function(t,r,n){"use strict";function e(t,r){function n(r){return function(){var n=Array.prototype.slice.apply(arguments);return n.unshift(this),t[r].apply(t,n)}}var e=!(!Object.defineProperty||!Object.defineProperties);if(!e)throw new Error("without defineProperty, simple-statistics cannot be mixed in");var i,s=["median","standardDeviation","sum","sampleSkewness","mean","min","max","quantile","geometricMean","harmonicMean","root_mean_square"];i=r?r.slice():Array.prototype;for(var o=0;o<s.length;o++)Object.defineProperty(i,s[o],{value:n(s[o]),configurable:!0,enumerable:!1,writable:!0});return i}r.exports=e},{}],25:[function(t,r,n){"use strict";function e(t){if(0===t.length)return null;if(1===t.length)return t[0];for(var r,n=i(t),e=n[0],s=0,o=1,a=1;a<n.length+1;a++)n[a]!==e?(o>s&&(s=o,r=e),o=1,e=n[a]):o++;return r}var i=t("./numeric_sort");r.exports=e},{"./numeric_sort":26}],26:[function(t,r,n){"use strict";function e(t){return t.slice().sort(function(t,r){return t-r})}r.exports=e},{}],27:[function(t,r,n){"use strict";function e(){this.weights=[],this.bias=0}e.prototype.predict=function(t){if(t.length!==this.weights.length)return null;for(var r=0,n=0;n<this.weights.length;n++)r+=this.weights[n]*t[n];return r+=this.bias,r>0?1:0},e.prototype.train=function(t,r){if(0!==r&&1!==r)return null;t.length!==this.weights.length&&(this.weights=t,this.bias=1);var n=this.predict(t);if(n!==r){for(var e=r-n,i=0;i<this.weights.length;i++)this.weights[i]+=e*t[i];this.bias+=e}return this},r.exports=e},{}],28:[function(t,r,n){"use strict";function e(t){if(0>=t)return null;var r=0,n=0,e={};do e[r]=Math.pow(Math.E,-t)*Math.pow(t,r)/s(r),n+=e[r],r++;while(1-i>n);return e}var i=t("./epsilon"),s=t("./factorial");r.exports=e},{"./epsilon":10,"./factorial":12}],29:[function(t,r,n){"use strict";function e(t){return 0===t?t=i:t>=1&&(t=1-i),Math.sqrt(2)*s(2*t-1)}var i=t("./epsilon"),s=t("./inverse_error_function");r.exports=e},{"./epsilon":10,"./inverse_error_function":16}],30:[function(t,r,n){"use strict";function e(t,r){if(0===t.length)return null;var n=s(t);if(r.length){for(var e=[],o=0;o<r.length;o++)e[o]=i(n,r[o]);return e}return i(n,r)}var i=t("./quantile_sorted"),s=t("./numeric_sort");r.exports=e},{"./numeric_sort":26,"./quantile_sorted":31}],31:[function(t,r,n){"use strict";function e(t,r){var n=t.length*r;return 0>r||r>1?null:1===r?t[t.length-1]:0===r?t[0]:n%1!==0?t[Math.ceil(n)-1]:t.length%2===0?(t[n-1]+t[n])/2:t[n]}r.exports=e},{}],32:[function(t,r,n){"use strict";function e(t,r){if(t.length<2)return 1;for(var n,e=0,i=0;i<t.length;i++)e+=t[i][1];n=e/t.length;for(var s=0,o=0;o<t.length;o++)s+=Math.pow(n-t[o][1],2);for(var a=0,u=0;u<t.length;u++)a+=Math.pow(t[u][1]-r(t[u][0]),2);return 1-a/s}r.exports=e},{}],33:[function(t,r,n){"use strict";function e(t){if(0===t.length)return null;for(var r=0,n=0;n<t.length;n++)r+=Math.pow(t[n],2);return Math.sqrt(r/t.length)}r.exports=e},{}],34:[function(t,r,n){"use strict";function e(t,r,n){var e=i(t,n);return e.slice(0,r)}var i=t("./shuffle");r.exports=e},{"./shuffle":40}],35:[function(t,r,n){"use strict";function e(t,r){var n=i(t,r),e=s(t),o=s(r);return null===n||null===e||null===o?null:n/e/o}var i=t("./sample_covariance"),s=t("./sample_standard_deviation");r.exports=e},{"./sample_covariance":36,"./sample_standard_deviation":38}],36:[function(t,r,n){"use strict";function e(t,r){if(t.length<=1||t.length!==r.length)return null;for(var n=i(t),e=i(r),s=0,o=0;o<t.length;o++)s+=(t[o]-n)*(r[o]-e);var a=t.length-1;return s/a}var i=t("./mean");r.exports=e},{"./mean":21}],37:[function(t,r,n){"use strict";function e(t){if(t.length<3)return null;var r=t.length,n=Math.pow(s(t),3),e=i(t,3);return r*e/((r-1)*(r-2)*n)}var i=t("./sum_nth_power_deviations"),s=t("./sample_standard_deviation");r.exports=e},{"./sample_standard_deviation":38,"./sum_nth_power_deviations":46}],38:[function(t,r,n){"use strict";function e(t){return t.length<=1?null:Math.sqrt(i(t))}var i=t("./sample_variance");r.exports=e},{"./sample_variance":39}],39:[function(t,r,n){"use strict";function e(t){if(t.length<=1)return null;var r=i(t,2),n=t.length-1;return r/n}var i=t("./sum_nth_power_deviations");r.exports=e},{"./sum_nth_power_deviations":46}],40:[function(t,r,n){"use strict";function e(t,r){return t=t.slice(),i(t.slice(),r)}var i=t("./shuffle_in_place");r.exports=e},{"./shuffle_in_place":41}],41:[function(t,r,n){"use strict";function e(t,r){r=r||Math.random;for(var n,e,i=t.length;i>0;)e=Math.floor(r()*i--),n=t[i],t[i]=t[e],t[e]=n;return t}r.exports=e},{}],42:[function(t,r,n){"use strict";function e(t){for(var r,n=0,e=0;e<t.length;e++)(0===e||t[e]!==r)&&(r=t[e],n++);return n}r.exports=e},{}],43:[function(t,r,n){"use strict";function e(t){return 0===t.length?null:Math.sqrt(i(t))}var i=t("./variance");r.exports=e},{"./variance":49}],44:[function(t,r,n){"use strict";function e(t){for(var r=t,n=t,e=1;15>e;e++)n*=t*t/(2*e+1),r+=n;return Math.round(1e4*(.5+r/i*Math.exp(-t*t/2)))/1e4}for(var i=Math.sqrt(2*Math.PI),s=[],o=0;3.09>=o;o+=.01)s.push(e(o));r.exports=s},{}],45:[function(t,r,n){"use strict";function e(t){for(var r=0,n=0;n<t.length;n++)r+=t[n];return r}r.exports=e},{}],46:[function(t,r,n){"use strict";function e(t,r){for(var n=i(t),e=0,s=0;s<t.length;s++)e+=Math.pow(t[s]-n,r);return e}var i=t("./mean");r.exports=e},{"./mean":21}],47:[function(t,r,n){"use strict";function e(t,r){var n=s(t),e=i(t),o=Math.sqrt(t.length);return(n-r)/(e/o)}var i=t("./standard_deviation"),s=t("./mean");r.exports=e},{"./mean":21,"./standard_deviation":43}],48:[function(t,r,n){"use strict";function e(t,r,n){var e=t.length,o=r.length;if(!e||!o)return null;n||(n=0);var a=i(t),u=i(r),c=((e-1)*s(t)+(o-1)*s(r))/(e+o-2);return(a-u-n)/Math.sqrt(c*(1/e+1/o))}var i=t("./mean"),s=t("./sample_variance");r.exports=e},{"./mean":21,"./sample_variance":39}],49:[function(t,r,n){"use strict";function e(t){return 0===t.length?null:i(t,2)/t.length}var i=t("./sum_nth_power_deviations");r.exports=e},{"./sum_nth_power_deviations":46}],50:[function(t,r,n){"use strict";function e(t,r,n){return(t-r)/n}r.exports=e},{}]},{},[1])(1)});
