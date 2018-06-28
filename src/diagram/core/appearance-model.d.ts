import { Property, ChildProperty, Collection, ComplexFactory } from '@syncfusion/ej2-base';import { TextDecoration, WhiteSpace, TextWrap, TextAlign, GradientType, TextOverflow } from '../enum/enum';

/**
 * Interface for a class Thickness
 */
export interface ThicknessModel {

}

/**
 * Interface for a class Margin
 */
export interface MarginModel {

    /**
     * Sets the space to be left from the left side of the immediate parent of an element
     * @default 0
     */
    left?: number;

    /**
     * Sets the space to be left from the right side of the immediate parent of an element
     * @default 0
     */
    right?: number;

    /**
     * Sets the space to be left from the top side of the immediate parent of an element
     * @default 0
     */
    top?: number;

    /**
     * Sets the space to be left from the bottom side of the immediate parent of an element
     * @default 0
     */
    bottom?: number;

}

/**
 * Interface for a class Shadow
 */
export interface ShadowModel {

    /**
     * Defines the angle of Shadow
     * @default 45
     */
    angle?: number;

    /**
     * Defines the distance of Shadow
     * @default 5
     */
    distance?: number;

    /**
     * Defines the opacity of Shadow
     * @default 0.7
     */
    opacity?: number;

    /**
     * Defines the color of Shadow
     * @default ''
     */
    color?: string;

}

/**
 * Interface for a class Stop
 */
export interface StopModel {

    /**
     * Defines the color of stop 
     * @default ''
     */
    color?: string;

    /**
     * Defines the offset of stop
     * @default 0
     */
    offset?: number;

    /**
     * Defines the opacity of stop
     * @default 1
     */
    opacity?: number;

}

/**
 * Interface for a class Gradient
 */
export interface GradientModel {

    /**
     * Defines the stop collection of gradient
     * @default []
     */
    stops?: StopModel[];

    /**
     * Defines the type of gradient
     * @default 'None'
     */
    type?: GradientType;

    /**
     * Defines the id of gradient
     * @default ''
     */
    id?: string;

}

/**
 * Interface for a class LinearGradient
 */
export interface LinearGradientModel extends GradientModel{

    /**
     * Defines the x1 value of linear gradient
     * @default 0
     */
    x1?: number;

    /**
     * Defines the x2 value of linear gradient
     * @default 0
     */
    x2?: number;

    /**
     * Defines the y1 value of linear gradient
     * @default 0
     */
    y1?: number;

    /**
     * Defines the y2 value of linear gradient
     * @default 0
     */
    y2?: number;

}

/**
 * Interface for a class RadialGradient
 */
export interface RadialGradientModel extends GradientModel{

    /**
     * Defines the cx value of radial gradient
     * @default 0
     */
    cx?: number;

    /**
     * Defines the cy value of radial gradient
     * @default cy
     */
    cy?: number;

    /**
     * Defines the fx value of radial gradient
     * @default 0
     */
    fx?: number;

    /**
     * Defines the fy value of radial gradient
     * @default fy
     */
    fy?: number;

    /**
     * Defines the r value of radial gradient
     * @default 50
     */
    r?: number;

}

/**
 * Interface for a class ShapeStyle
 */
export interface ShapeStyleModel {

    /**
     * Sets the fill color of a shape/path
     * @default 'white'
     */
    fill?: string;

    /**
     * Sets the stroke color of a shape/path
     * @default 'black'
     */
    strokeColor?: string;

    /**
     * Defines the pattern of dashes and spaces to stroke the path/shape
     * @default ''
     */
    strokeDashArray?: string;

    /**
     * Defines the stroke width of the path/shape
     * @default 1
     */
    strokeWidth?: number;

    /**
     * Sets the opacity of a shape/path
     * @default 1
     */
    opacity?: number;

    /**
     * Defines the gradient of a shape/path
     * @default null
     * @aspType object
     */
    gradient?: GradientModel | LinearGradientModel | RadialGradientModel;

}

/**
 * Interface for a class StrokeStyle
 */
export interface StrokeStyleModel extends ShapeStyleModel{

    /**
     * Sets the fill color of a shape/path
     * @default 'transparent'
     */
    fill?: string;

}

/**
 * Interface for a class TextStyle
 */
export interface TextStyleModel extends ShapeStyleModel{

    /**
     * Sets the font color of a text
     * @default 'black'
     */
    color?: string;

    /**
     * Sets the font type of a text
     * @default 'Arial'
     */
    fontFamily?: string;

    /**
     * Defines the font size of a text
     * @default 12
     */
    fontSize?: number;

    /**
     * Enables/disables the italic style of text
     * @default false
     */
    italic?: boolean;

    /**
     * Enables/disables the bold style of text
     * @default false
     */
    bold?: boolean;

    /**
     * Defines how the white space and new line characters have to be handled
     * @default 'CollapseSpace'
     */
    whiteSpace?: WhiteSpace;

    /**
     * Defines how the text should be wrapped, when the text size exceeds some specific bounds
     * @default  'WrapWithOverflow'
     */
    textWrapping?: TextWrap;

    /**
     * Defines how the text should be aligned within its bounds
     * @default 'Center'
     */
    textAlign?: TextAlign;

    /**
     * Defines how the text should be decorated. For example, with underline/over line
     * @default 'None'
     */
    textDecoration?: TextDecoration;

    /**
     * Defines how to handle the text when it exceeds the given size.
     * @default 'Wrap'
     */
    textOverflow?: TextOverflow;

}