## Laser Beam Measurement Integrated Machine

The mass of electrode material per unit area, known as the areal density of the electrode, is a crucial factor in determining the consistency of batteries. Radiation emitted from the decay of Krypton-85 (Kr-85) penetrates the battery electrodes, with a portion of the radiation being absorbed by the electrodes. This results in a certain attenuation of the radiation intensity after passing through the electrodes, relative to the incident radiation intensity.

![1-1.jpg](https://i.postimg.cc/rp34ybLw/1-1.jpg)

1. **Introduction to Device Functions**
   This product is used for the detection of coating surface density and thickness of battery cells.
   1.1 **Principles of Areal Density Measurement**

![1-2.jpg](https://i.postimg.cc/tJTGrrYF/1-2.jpg)

The mass per unit area of an electrode sheet, referred to as the sheet's areal density, is a crucial determinant of battery uniformity. The decay of Krypton-85 (Kr-85) emits β-rays, some of which are absorbed by the electrode sheet as they penetrate it, causing a relative attenuation of the rays' intensity after passing through the sheet. This attenuation ratio is inversely exponential to the areal density of the penetrated electrode sheet. By measuring the β-rays' intensity before and after passing through the electrode sheet using a chamber filled with a special gas for ionization, the areal density of the electrode sheet can be calculated. As depicted in Figure 1, the relationship between the initial intensity I0 of the rays before transmission and the intensity I after transmission follows m=1/λ（㏑（I0/I））, where λ is the ray absorption coefficient per unit areal density of the electrode sheet, and m is the areal density.

Areal density is defined as the mass m of an electrode sheet per unit area s. If the density ρ of the material is constant, the areal density of the material is directly proportional to its thickness d: areal density =m/s=ρd. However, the inability of the lithium battery coating process to ensure constant density means that the areal density of an electrode sheet cannot be directly calculated by measuring thickness alone. Hence, a simple laser thickness gauge can only measure the thickness of materials. This device, by measuring both the actual values of areal density and thickness of the electrode sheet, calculates the density of the sheet. This allows the electrode sheet thickness measurements obtained by a laser displacement sensor to be accurately converted into areal density values, displaying the areal density or thickness values of thinned areas in real-time.

1.2 **Principle of Thickness Measurement**

![1-3.png](https://i.postimg.cc/rsb3fq6L/1-3.png)

The thickness measurement module consists of two laser displacement sensors arranged in a top-down opposing configuration. The two sensors measure the positions of the top and bottom surfaces of the object being measured, respectively. The thickness of the object is then calculated based on these measurements. In the schematic, L represents the distance between the two laser displacement sensors, A is the distance from the upper sensor to the measured object, B is the distance from the lower sensor to the measured object, and T is the thickness of the measured object. Therefore, T=L-A-B.

1.3 **Overall Equipment Structure Diagram**

![1-4.jpg](https://i.postimg.cc/zvLPb4y2/1-4.jpg)

2. **Measurement System Functions**

- Implement online measurement of the areal density of the coating on film.
- Real-time display of the maximum, minimum, average value, and mean deviation of the areal density measured at the current scanning cross-section, current scanning position, thickness signal, coating speed, and length of the current roll.
- Real-time display of the current scanning cross-sectional diagram (options for bar chart, line chart, or area chart).
- Display of the last scanning cross-sectional diagram for review (options for bar chart, line chart, or area chart).
- Excel report recording and viewing functionality, automatically generating an Excel report after each roll of film is produced.
- Remote synchronous display via frequency division networking (display at the coater head).
- Adaptive scanning boundary function, automatically adjusting the scanning range with roll correction to ensure optimal scanning.
- Positioning measurement function: Allows specifying any position within the scanning area, and the measurement head will position at the specified location.
- Recipe function: Stores measurement and scanning parameters for different substrates, coating widths, and coating methods for easy recall.
- System self-diagnosis function.
- Alarm function: Allows setting high limits for coating width, edge width, and areal density for alarms.
- Real-time and reliable self-calibration mechanism compensating for radiation attenuation.
- Real-time display of the trend in weight areal density across longitudinal and transverse directions.
- Real-time display of thickness variation trends across longitudinal and transverse directions.
- Real-time display of the contour of the coating head gap, including the start and end, left and right thinning areas. The size of the thinning area can be independently set, with a minimum setting of 0.1mm to output an average thickness value.
- Professional invalid data filtering for coating gap areas, with an intuitive and convenient software management interface.
- Reliable Ethernet data communication protocol.
- Software data stored in industrial PCs using CSV files and databases, capable of inputting and saving parameters such as model, batch number, date, upper and lower process limits, etc.
- Software operating permissions: Provides more than two levels of access, such as administrator and operator.
- System configuration with three-color warning buzzer.
- Transmits detection data to the coater and defect detection system, enabling the coater to automatically adjust coating parameters for closed-loop control. Marks are made at corresponding defect locations, and all detection standards and data are uploaded to the MES system.
