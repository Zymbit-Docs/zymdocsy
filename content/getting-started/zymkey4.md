---
title : "Getting Started with Zymkey4"
description: ""
date: ""
lastmod: ""
draft: false
images: ["/static"]
type: "docs"
layout: "single"
weight: -690
---

<h1 id="zymkey4i-the-security-module-for-raspberry-pi">ZYMKEY4i.  The Security Module for Raspberry Pi</h1>
<p>ZYMKEY4i is the fourth generation of the Zymbit security module designed specifically to work with Raspberry Pi. It connects to the GPIO header of the PI and uses the I2C bus and GPIO-4 to  communicate with the Pi CPU via an encrypted channel. </p>
<p>ZYMKEY4i can also be used with other I2C configurations, including the Nvidia Jetson Nano. Click here for <a href="https://community.zymbit.com/t/getting-started-with-zymkey4i-for-jetson-nano/936">Getting Started with ZYMKEY4i for Jetson Nano</a>.</p>
<hr>
<h2 id="summary-of-setup-steps">SUMMARY OF SETUP STEPS</h2>
<table>
<thead>
<tr>
<th></th>
<th><strong>STEP_DESCRIPTION</strong></th>
<th><strong>NOTES AND / OR CHECKPOINT</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td><strong>Hardware &amp; Connections</strong></td>
<td>What plugs into where.</td>
</tr>
<tr>
<td>1</td>
<td><strong>Battery Install</strong></td>
<td>The battery is required to maintain the Real Time Clock and the perimeter detect circuits when the host power is removed. See <a href="https://community.zymbit.com/t/zymkey-battery-do-i-need-it/779/2?u=michelle_of_zymbit">this chart</a> for more information.</td>
</tr>
<tr>
<td>2</td>
<td><strong>Hardware Install</strong></td>
<td>Blue LED will blink rapidly to indicate Zymkey is connected correctly but not yet configured.</td>
</tr>
<tr>
<td>3</td>
<td><strong>Configure I2C Bus</strong></td>
<td>The I2C Bus must be enabled. For Raspbian OS, the I2C Bus is disabled by default. For Ubuntu, the I2C Bus is enabled by default.</td>
</tr>
<tr>
<td>4</td>
<td><strong>Software Install &amp; API</strong></td>
<td>Blue LED will blink once every three seconds to indicate Zymkey is connected and configured.</td>
</tr>
<tr>
<td>5</td>
<td><strong>Developer Mode</strong></td>
<td>DEVELOPER MODE- bindings are temporary, Zymkey can be moved to different Pi hosts and SD Cards.</td>
</tr>
<tr>
<td>6</td>
<td><strong>Production Mode</strong></td>
<td>PRODUCTION MODE- binding is permanent! Zymkey can NOT be moved to different Pi hosts or SD Cards. Transition to Production Mode by cutting Lock Tab.</td>
</tr>
</tbody>
</table>
<h1 id="scope">SCOPE</h1>
<p>In this Getting Started Guide we describe how to install your Zymkey 4i to a Raspberry Pi running Rasbian or Ubuntu. The installation process is the same for both of these Linux distributions. </p>
<p><strong><a href="https://community.zymbit.com/c/operating-system/23">Learn about Linux OS support for Zymkey.</a></strong></p>
<hr>
<h2 id="0-hardware-connectors">0. HARDWARE &amp; CONNECTORS</h2>
<p><img src="/static/HSM6-hero-transparent.png" alt="hsm6 test"></p>
<p><img src="/static/HSM6-hero-transparent.png" alt="hsm6 test resize scale" width=50%></p>
<p><img src="https://aws1.discourse-cdn.com/standard10/uploads/zymbit/original/1X/39e3c8673e7b8b6ba69428386d3d8e06a8260de0.jpeg" alt="test url" width="150"></p>
<img src="https://www.zymbit.com/wp-content/uploads/2017/09/Zymbit-Logo-Horizontal-Stack.png" alt="zymbit">
<p>testing url1</p>
<hr>
<h2 id="1-battery-installation-recommended-">1. BATTERY  INSTALLATION  (Recommended)</h2>
<p>Your Zymkey 4i  can be fitted with a <strong>3V CR1025  coincell</strong> battery that is used to maintain operation of the real-time-clock (RTC) and tamper detect features in the event that main power (from the GPIO header) is lost. </p>
<p>If you choose not to fit a battery, then these important security features will not function in the event main power is removed. </p>
<p><strong>Battery installation is highly recommended if your device is vulnerable to physical access !</strong></p>
<p>Use a <strong>high quality 3V CR1025</strong> coincell battery such as the <a href="https://www.mouser.com/datasheet/2/315/3635_fileversion-1627310.pdf">Panasonic - CR-1025EL, LITHIUM MANGANESE DIOXIDE</a>. </p>
<p><strong>IMPORTANT:</strong> Note the correct polarity with <strong>+ve  facing upwards !!</strong></p>
<p><img src="upload://djDO0WxBvKD5ycN7ZwEK9x7V1rA.png" alt="ZK3-Battery-Install-1|690x306"> </p>
<hr>
<h2 id="2-hardware-installation">2. HARDWARE INSTALLATION</h2>
<p><strong>Power down your Raspberry Pi first!</strong></p>
<p><strong>IMPORTANT:</strong> Installing your hardware correctly is important to avoid destroying your Pi or Zymkey. 
Be sure to follow the images below to ensure the first 10 GPIO pins are correctly aligned with the Zymkey header. Note: the coin cell battery should be facing up.</p>
<p><img src="upload://7GoPKkdgTvav574Rimkph5bAY3o.png" alt="rpi|660x500"> </p>
<p><img src="upload://jmbojBHB8lSK4JlOadcMlpLGTdt.png" alt="|660x440"></p>
<p><img src="upload://hmGGDnOfDu6z0p2B69rfzgGLQww.png" alt="|690x490"></p>
<p>Fit the Zymkey 4i with LED and battery holder facing upwards. Be sure the black connector is properly aligned with the first 10 GPIO pins and that pressed firmly down onto the header. If misaligned, this could cause damage to the Zymkey and/or your Raspberry Pi. Your Zymkey should fit relatively snug and maintain a tight interference fit around the pins.</p>
<p>Zymkey occupies 10 pins on the GPIO header. It can also be used with Pi Plate devices attached, or other i2c devices attached. See options later for correct address range and use of IO pins.</p>
<p><img src="upload://9Qh0QDekiuWW5JCg4jjmA55gjuR.png" alt="image|386x500">  </p>
<blockquote>
<h2 id="using-an-alternative-gpio-pin">Using an alternative GPIO pin</h2>
<p>The default configuration uses GPIO4. This can be reconfigured to use another GPIO of your choice. 
<a href="https://community.zymbit.com/t/589"><strong>Learn more&gt;</strong></a></p>
<h2 id="using-an-alternative-i2c-address">Using an alternative I2C address</h2>
<p>The default I2C address for Zymkey is 0x30. If this conflicts with another device in your system, you can reconfigure the Zymkey to use another address of your choice.
<a href="https://community.zymbit.com/t/639"><strong>Learn more&gt;</strong></a></p>
</blockquote>
<hr>
<p><strong>Option:</strong> Using Zymkey with another Pi Plate fitted.
<img src="upload://fg7DzTiyvYoVh31ayMyCBJdSWbd.png" alt="zk_pi_pi_plate_fitted|690x391"> </p>
<h3 id="power-on-confirm-operation">Power On, Confirm Operation</h3>
<p>Finally, power up the pi and you will see a blue led blinking rapidly and consistently (5 blinks per second)</p>
<p><img src="upload://reBvv7dTjJf90cneIjw685p9RbW.gif" alt="zymkey-LED-flashing-10-per-second|103x261"> </p>
<h4 id="zymkey-operational-but-not-configured">Zymkey operational, but not configured</h4>
<p>(If the blue LED blinks erratically, or not at all, then there is an installation error and you should check your connections.)</p>
<blockquote>
<h2 id="power-quality">Power Quality</h2>
<p><a href="https://community.zymbit.com/t/power-quality-considerations-draft/243">Learn why power quality matters to the reliable and secure operation of your system and Zymkey. </a></p>
</blockquote>
<hr>
<h2 id="3-configure-the-i2c-bus">3. CONFIGURE THE I2C BUS</h2>
<p>For Raspbian Operating Systems you must configure the state of the I2C bus to &quot;ON&quot;. </p>
<p>For Ubuntu Operating Systems, the I2C bus is automatically configured and you may skip this step.</p>
<p>For Raspbian OS:</p>
<ol>
<li>Log in to your pi and run <code>sudo raspi-config</code></li>
<li>Select Interfacing Options -&gt; I2C -&gt; 
Would you like the ARM I2C interface to be enabled? select  (Yes), enter, enter</li>
<li>Arrow Right to Finish</li>
</ol>
<p>Your I2C bus is now configured and ready to talk to the Zymkey. Next install the Zymkey interface software (ZKIFC) onto your Pi. </p>
<p>The default I2C address for Zymkey is 0x30.</p>
<p><strong>IMPORTANT: The default mode for the cpu scaling governor is ondemand. There have been some issues with the interaction between the zymkey and the I2C bus, when the governor is set to ondemand. We highly recommend to switching the governor to performance to get the most out of the zymkey. 
<a href="https://community.zymbit.com/t/dev-team-known-issues/996">How to set cpu governor to performance.</a></strong></p>
<hr>
<h2 id="4-software-package-installation-api">4. SOFTWARE PACKAGE INSTALLATION &amp; API</h2>
<p>For a bare raspbian system, first login to your pi.</p>
<p>NOTE: Your Zymkey will require a number of packages to be installed from the Raspberry Pi and Zymbit apt repositories. The following setup script will be installing a number of files and software packages on your system:</p>
<ul>
<li>Zymbit .service files located in the /etc/systemd/system directory</li>
<li>pip</li>
</ul>
<p>Download and install the necessary Zymbit services onto your Pi. 
<code>curl -G https://s3.amazonaws.com/zk-sw-repo/install_zk_sw.sh | sudo bash</code>
(grab a cup of coffee because this will take between 4 and 20 minutes).</p>
<h3 id="binding-device-id-and-authentication-">Binding, Device ID and Authentication.</h3>
<p>Good security begins with assigning each device a unique and unalterable identity (Device ID), that is used to authenticate subsequent interactions with the device. </p>
<p>Zymkey generates a unique Device ID by measuring certain attributes of the specific host Raspberry Pi (Measurement), and then combining that Measurement with the unique ID of a specific Zymkey. The combination process uses a cryptographic function and this process is generally termed &quot;binding&quot;. On completion of a binding process, then Zymkey is said to be &quot;bound&quot; to the Pi.  </p>
<p> Zymkey supports two operating modes: </p>
<ol>
<li>Developer Mode: bindings are temporary, zymkey can be moved to different Pi hosts and SD Cards </li>
<li>Production Mode: binding is permanent!  zymkey  can <strong>NOT</strong> be moved to different Pi hosts or SD cards</li>
</ol>
<h2 id="5-developer-mode-temporary-binding-">5. DEVELOPER MODE (temporary binding)</h2>
<p>When the software installation has completed, reboot your pi. After the reboot has completed, the pi will perform an operation that will temporarily bind the Zymkey to your pi. Once the Zymkey is bound to the pi, the Zymkey&#39;s blue LED should blink slowly - once every 3 seconds - to indicate that the binding is complete. </p>
<p><img src="upload://1hdfSXEPdeXHkxzueZtgKAQ3b0I.gif" alt="zymkey-LED-1-pulse-per-three--seconds|103x261"> </p>
<h4 id="zymkey-operational-temporary-binding-to-host-zymkey-in-developer-mode-">Zymkey operational, temporary binding to host (Zymkey in Developer Mode)</h4>
<p>At this point, your Zymkey is now in Developer Mode, the binding is temporary and the Zymkey can be moved to another Pi and the binding process repeated. </p>
<hr>
<h2 id="6-production-mode-permanent-binding-">6. PRODUCTION MODE (permanent binding)</h2>
<p>When you have completed all your development work and you are ready to deploy your system into the field we recommend that you permanently bind your Zymkey to a &#39;specific host Pi and SD card &#39;.</p>
<p><strong>WARNING: THIS BINDING PROCESS IS PERMANENT AND CANNOT BE REVERSED. PAY ATTENTION TO  THE FOLLOWING:</strong></p>
<ul>
<li><p>Your specific Zymkey will be locked to the specific host Pi and it is impossible to move or bind your Zymkey to another Pi. There are no factory resets, masterkeys or other forms of recovery. </p>
</li>
<li><p>If you are using the perimeter_detect features, then the sequence in which you arm, disarm is very important. Be sure to follow the process steps below.</p>
</li>
<li><p>Once you have locked your Zymkey into production mode, zymbit cannot guarantee its operation if you subsequently do a major distribution upgrade (e.g. Raspbian Jessie to Stretch).** <a href="https://zymbit.com/contact-form/">Contact Zymbit for more information.</a></p>
</li>
<li><p>If you decide that you are not ready for permanent binding then leave it in developer mode, but beware this makes it easier for a bad actor to replace the host with a rogue hardware.</p>
</li>
</ul>
<h3 id="-moving-from-developer-mode-to-production-mode-"><strong>Moving from Developer Mode to Production Mode</strong></h3>
<h4 id="with-zymkey-in-developer-mode-lock-tab-in-place-">With Zymkey in Developer Mode (Lock Tab in Place)</h4>
<p>Do not cut the Lock Tab yet!</p>
<ol>
<li>Install the battery on Zymkey</li>
<li>Place Zymkey onto the Pi (with power down on the pi)</li>
<li>Turn on the Pi</li>
<li>Install and bind the Zymkey and Pi</li>
<li>Set Perimeter Event Actions to “none” or “notify only”</li>
<li>Create your LUKS encrypted volume</li>
<li>Install your applications into your encrypted volume</li>
<li>Confirm your system and applications work fully as you intend</li>
</ol>
<h4 id="when-you-are-ready-to-move-zymkey-to-production-mode-">When you are ready to move Zymkey to Production Mode,</h4>
<p>Do not cut the Lock Tab yet!</p>
<ol>
<li>Turn off the power to the Pi.</li>
<li>Do not remove the battery.</li>
<li>Remove the zymkey from the Pi</li>
<li>Now Cut the Lock Tab</li>
<li>Replace the Zymkey onto the Pi and turn on power to the Pi</li>
<li>Close your perimeter circuit(s) (enclosure lid)</li>
<li>Clear Perimeter Detect Events</li>
<li>Get Perimeter Detect Info to confirm prior events are cleared and the perimeter is closed.</li>
<li>If the Perimeter Detect Event returns clear, then you can ‘arm your system’ as you require by setting  Set Perimeter Event Actions to “none”, “notify” or “selfdestruct”</li>
<li><strong>Your system is now armed.</strong></li>
</ol>
<h3 id="manual-cut-2-lock">Manual Cut-2-Lock</h3>
<p><strong>IMPORTANT:</strong> first power down your Pi and Zymkey. Removing the Cut-2-Lock tab can be done in situ, or by removing the Zymkey from the Pi. <strong><em>Also insure that your perimeter detect actions are not set to self-destruct mode.</em></strong> Follow the steps outlined above, and refer to the programming api documents for more information on the operation of Perimeter Detect Events. </p>
<h4 id="cut-using-sharp-diagonal-cutter-pliers">Cut using sharp diagonal cutter pliers</h4>
<p><img src="upload://en8QgoCzMNkHxBD2xe58ZJzWjFS.png" alt="|650x423"></p>
<hr>
<h4 id="cut-along-guide-notches">Cut along guide notches</h4>
<p><img src="upload://fbHY8DcJlIFhvBsZsdVWTHp0jOT.png" alt="|650x434"></p>
<hr>
<h4 id="finished-cut-should-be-flush-to-edge-">Finished cut should be flush to edge.</h4>
<h2 id="-650x434-upload-i4h8sjj3l5zo67ato3bskajs9wd-png-"><img src="upload://i4h8SJJ3l5zo67Ato3bSKAJS9wd.png" alt="|650x434"></h2>
<h4 id="once-you-have-successfully-cut-the-lock-tab-and-have-rebooted-your-system-the-blink-pattern-will-change-to-3-rapid-blinks-once-every-3-seconds-to-indicate-that-zymkey-has-bound-to-the-host-in-production-mode-">Once you have successfully cut the lock tab and have rebooted your system, the blink pattern will change to 3 rapid blinks once every 3 seconds to indicate that Zymkey has bound to the host in production mode.</h4>
<h2 id="-">----------</h2>
<h2 id="perimeter-detect">PERIMETER DETECT</h2>
<p>Refer to <a href="https://community.zymbit.com/c/zymkey/63/">Using Perimeter Detect</a></p>
<hr>
<h2 id="api-documentation">API DOCUMENTATION</h2>
<p>API&#39;s are available for Python, C, C++
<a href="https://community.zymbit.com/t/189">Go to API Documents &gt;</a>  </p>
<hr>
<h2 id="application-examples">APPLICATION EXAMPLES</h2>
<p>The quickest way to get started is to see the various methods at work by running these scripts:
<code>python /usr/local/share/zymkey/examples/zk_app_utils_test.py</code>
<code>python /usr/local/share/zymkey/examples/zk_crypto_test.py</code></p>
<p>Please read the Zymkey community pages for documentation on:</p>
<ul>
<li><a href="https://community.zymbit.com/t/encrypt-your-root-file-system-on-raspberry-pi/150">LUKS filesystem encryption</a></li>
<li><a href="https://community.zymbit.com/t/zymkey-encrypting-decrypting-sensor-data-on-disk/94">Encrypting &amp; decrypting sensor data on disk</a></li>
<li><a href="https://community.zymbit.com/t/zymkey-rtc-real-time-clock-support/84">Real Time Clock</a></li>
</ul>
<p>----------<div data-theme-toc="true"> </div></p>
