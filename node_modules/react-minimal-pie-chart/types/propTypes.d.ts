import PropTypes from 'prop-types';
export declare const stylePropType: PropTypes.Requireable<{
    [x: string]: string | number | null | undefined;
}>;
export declare const dataPropType: PropTypes.Requireable<(PropTypes.InferProps<{
    title: PropTypes.Requireable<string | number>;
    value: PropTypes.Validator<number>;
    color: PropTypes.Requireable<string>;
    key: PropTypes.Requireable<string | number>;
    style: PropTypes.Requireable<{
        [x: string]: string | number | null | undefined;
    }>;
}> | null | undefined)[]>;
