## The Application of NGAM-2008 Natural Gamma Radiation Ash Analyzer at Dongtan Coal Plant

**Abstract:** This paper elaborates on the working principle, structural composition, and functional characteristics of the NGAM-2008 natural gamma radiation ash analyzer. It also analyzes and evaluates its application and effectiveness at the Dongtan Coal Preparation Plant. Comparative experiments and production practices demonstrate that the ash analyzer's measurement accuracy fully meets user requirements, with excellent operational performance, minimal daily maintenance, and no need for radioactive sources, making it safe and reliable while significantly reducing user management costs. Additionally, it outlines the key points for daily maintenance of the ash analyzer.

Currently, in China's coal mines and coal preparation plants, there is widespread use of active ash analyzers based on dual-energy gamma-ray technology for online detection of coal ash content, used to guide production. With increasing attention and strengthening of management and registration of radioactive sources by national environmental protection, public security, health, and other departments, the approval procedures for new radioactive sources have become increasingly cumbersome, leading to higher usage and maintenance costs. Additionally, due to limitations in detection principles, dual-energy gamma-ray ash analyzers have significant drawbacks in production, such as high measurement errors for high ash content, ash content measurement accuracy being affected by coal flow thickness, limited ash content measurement range, and the inability to achieve full cross-sectional measurement.

To address these issues, the NGAM-2008 natural gamma radiation ash analyzer based on the natural gamma radiation principle of coal has been developed for ash content detection. It not only solves the inconvenience in usage and maintenance of active ash analyzers but also effectively compensates for their shortcomings in ash content measurement.

1. **General**

The Dongtan Coal Mine of Yanzhou Coal Mining Co., Ltd. is a large-scale modern mine designed and constructed during China's "Seventh Five-Year Plan." It was completed and put into operation in December 1989 with a designed production capacity of 4.0 million tons per annum (Mt/a) and an approved production capacity of 7.5 Mt/a. The Dongtan Coal Mine's coal preparation plant is a mine-type coal preparation plant that matches the production capacity of the mine, with a designed annual capacity of 4.0 Mt for raw coal processing.

In the product storage and transportation segment, the 213# belt conveyor at Dongtan Coal Preparation Plant is responsible for the transfer of clean coal and mixed washed coal into the warehouse. This belt conveyor is 1,040 meters long, 1.2 meters wide, with a steel wire core, a measured belt speed of 2.938 m/s, and a flow rate of 600 to 1,500 tons per hour (t/h). The ash content of the mixed washed coal transported by this conveyor ranges from 20% to 40%.

Due to the wide fluctuation range in ash content and high flow rate of mixed washed coal, it is not conducive to ash detection using active ash analyzers. Therefore, in December 2013, Dongtan Coal Preparation Plant decided to install an NGAM-2008 natural gamma radiation ash analyzer on the 213# belt conveyor to detect the ash content of the mixed washed coal being transported by the conveyor.

2. **NGAM-2008 Natural Gamma Radiation Ash Analyzer**

   2.1 **Working Principle**

Radioactive isotopes are commonly found in nature, with certain amounts of natural radioactive elements (such as uranium, thorium, and potassium, among others) present in rocks, soil, and even coal. In fact, coal contains more radioactive elements in its mineral matter (ash content) compared to its organic matter (volatile content). These radioactive elements can be considered as small radioactive sources. When the natural gamma (γ) rays emitted by these elements interact with surrounding substances (such as minerals and organic matter in coal), the energy of natural γ rays tends to concentrate towards lower energy levels, forming a "low-energy peak." The shape and area of this "low-energy peak" in the spectrum are related to the composition of the coal.

By utilizing this information, high-efficiency and high-sensitivity γ-ray detectors can detect the flux of characteristic γ rays, allowing for rapid monitoring of coal ash content. Combining the natural radioactive information with the coal weight signal per unit length of the belt conveyor (output signal of the belt scale) further enhances the confidence level of online ash content monitoring.

2.2 **Structure and Components**

The NGAM-2008 natural gamma radiation ash analyzer is composed of several units, including a γ-ray detector, environmental radiation shielding, radiation energy spectrum analysis processor, coal flow load weighing device, mainframe, communication module, and ash content analysis software.

The NGAM-2008 natural gamma radiation ash analyzer consists of several key components:

(1) **γ-ray detector**: The γ-ray detector is placed inside an environmental radiation shield and positioned between the upper and lower belts of the conveyor. Its double guide rail bracket is closely attached to the underside of the upper belt. γ-rays emitted by the coal flow pass through the detection window between the double guide rails and enter the detector, where they are converted into electrical signals for analysis. The core components of the γ-ray detector, such as scintillation crystals, photomultiplier tubes, and high-voltage modules, are encapsulated in an alloy structure that is resistant to vibration and humidity. The detector has a short response time and high energy resolution.

(2) **Environmental radiation shield**: Positioned above the conveyor belt, the environmental radiation shield is a steel structure embedded with anti-radiation alloy blocks. It isolates the measured coal flow from the external environment, effectively shielding 99% of external environmental radiation and eliminating the influence of environmental background radiation. This setup allows the detector to more efficiently detect the γ-rays emitted by the coal flow.

(3) **Radiation energy spectrum analysis processor**: This is an embedded application-specific computer that is connected to the γ-ray detector via specially designed low-impedance signal cables. It analyzes, processes, and calculates raw detection data in real-time, displaying dynamic parameters. The analysis processor has a variety of interfaces: it can receive the instantaneous load signal from the coal flow load weighing device (4-20 mA load signal), output a 4-20 mA ash content signal for use by the automatic control system, output a 485 communication signal for data interaction with the mainframe, and has a reserved interface for an online moisture analyzer to calculate the heating value of the product based on moisture signal input.

(4) **Coal flow load weighing device**: As per the natural gamma radiation ash detection principle, this device is a necessary component of the NGAM-2008 ash analyzer. It uses a suspended weighing structure and is installed on the conveyor belt beneath the environmental radiation shield. The area where it weighs the coal flow is the same area where the γ-ray detector detects the coal flow, enhancing the confidence level of ash content measurement. The device is connected to the radiation energy spectrum analysis processor via a dedicated signal cable to transmit real-time load information for ash content calculation. It has a measurement accuracy of 0.5 class and provides reliable production information to users.

(5) **Communication module**: This is an optional component that can be chosen based on the site conditions, including 485 communication module, fiber optic communication module, or Ethernet communication module. Considering the high communication rate and the relatively long distance (about 500-600 meters) and complex environment between the installation site of the 213# belt conveyor at Dongtan Coal Preparation Plant and the dispatch room, a pair of fiber optic communication modules are used for reliable and interference-free data communication between the on-site radiation energy spectrum analysis instrument and the dispatch room mainframe.

(6) **Mainframe**: The mainframe uses an IPC industrial computer as its hardware platform with the following configuration: 3 GHz CPU, 1TB hard drive, 4GB RAM, 100M network card, DVD recorder, MOXA 485 communication card, 53 cm LCD monitor, etc., and can be equipped with a printer as needed.

(7) **Ash content analysis software**: The ash content analysis software runs on the mainframe and analyzes the nuclear detection data uploaded by the radiation energy spectrum analysis processor to calculate the ash content. The software allows users to query and modify parameters, provides real-time and historical curves, generates data reports, greatly facilitating user management, and improving the level of management automation.

2.3 **Features of Functionalites**

(1) No radioactive source: The NGAM-2008 does not use a radioactive source, eliminating radiation safety hazards and simplifying equipment management. It reduces operating costs since there are no management concerns related to radioactive sources.

(2) Real-time capability: It can measure ash content in as little as 10 seconds, which is much faster than active ash analyzers, enhancing its real-time performance.

(3) Versatility: Due to its detection principle, the NGAM-2008 has no upper limit on ash content measurement and is suitable for measuring ash content on various types of conveyor belts, including standard belts and steel wire belts, without restrictions on coal flow rates (bulk density).

(4) Easy installation: Its modular design allows for easy and straightforward installation.

(5) Low calibration workload: It uses static calibration methods, which means during on-site calibration, the conveyor belt can be stopped, and only static coal laying is required, reducing the workload compared to dynamic calibration methods.

(6) Full-range detection: It can perform ash content detection across the entire cross-section of the conveyor belt, providing more accurate and representative ash content data.

(7) Integration of ash content and production: Since it performs full-range detection, it not only provides accurate ash content data but also accurate production data of coal flow on the conveyor belt.

(8) Full functionality: It can incorporate coal moisture data and automatically calculate and provide real-time indicators of coal heating value, enhancing its overall functionality.

2.4 **Measurement Accuracy**

NGAM-2008 natural gamma radiation ash analyzer can achieve integrated measurement of ash content and production. The ash content measurement accuracy (standard deviation) is as follows:

- When the measured ash content is below 15%, the ash content measurement accuracy is ±0.5% ash content.
- When the measured ash content is between 15% to 30%, the ash content measurement accuracy is ±1.5% ash content.
- When the measured ash content is above 30%, the ash content measurement accuracy is ±2.5% ash content.

The production measurement accuracy is 0.5 class.

3. **Application Effects**

   3.1**Comparative experiments**

In January 2014, Dongtan Coal Mine's coal preparation plant conducted a random inspection of the measurement results of the NGAM-2008 natural gamma radiation ash analyzer to check its actual performance. Table 1 presents the comparison results of 10 randomly sampled data sets. The comparison and evaluation methods followed the data processing methods specified in GB/T 19952-2005 "Performance Evaluation Method for Online Coal Analyzers," which includes the double-factor experimental design.

3.2**Experimental Data Analysis**

The 10 sets of comparative data exhibit a linear relationship, with a linear coefficient of 0.948. Therefore, the NGAM-2008 natural gamma radiation ash analyzer shows a good correlation with the sampled assay values.

3.3**Evaluation of Experimental Results**

According to calculations, the average deviation between the ash content measurements shown by the NGAM-2008 natural gamma radiation ash analyzer and the reference values from assays in this comparative experiment is only 0.38%. The correlation is excellent, with no outliers, and the measurement precision is 1.68%. This precision meets the requirement of accuracy within 2.5% for ash content measurements above 30%, fulfilling the accuracy standards.

Considering the potential errors in sampling and sample preparation, increasing the sampling frequency, extending the comparison cycle time, and adding more samples in the experiment can further improve the dynamic precision of comparison. The results of the comparative experiment demonstrate that the NGAM-2008 natural gamma radiation ash analyzer's measurement performance fully meets production requirements.

4. **Usage Precautions**

Here are some usage precautions to ensure the measurement accuracy of the NGAM-2008 natural gamma radiation ash analyzer during daily operations:
(1) Regularly clean the ash deposited on the γ-ray detector promptly.
(2) Perform zero-point calibration regularly on the coal flow load detection device. Check the contact between the idler rollers and the belt conveyor in the weighing area to ensure there are no instances of hanging or jamming.
(3) Frequently sample the production coal flow, compare the results with the measured values, and maintain proper data recording and accumulation. Adjust parameters for systematic deviations as needed.
(4) Conduct regular dynamic comparative experiments to promptly identify and address any issues that arise.

5. **Conclusion**

In January 2014, the NGAM-2008 natural gamma radiation ash analyzer was successfully installed on the 213# conveyor belt at Dongtan Coal Mine's coal preparation plant. Over the past six months of operation, it has shown excellent performance, with ash content measurement accuracy fully meeting user requirements. It requires minimal daily maintenance, does not use radioactive sources, and is safe and reliable, greatly reducing management costs for users. Practical experience at Dongtan Coal Mine's coal preparation plant has demonstrated that the NGAM-2008 natural gamma radiation ash analyzer has significant advantages in the field of online coal quality testing and has promising prospects for widespread application.
